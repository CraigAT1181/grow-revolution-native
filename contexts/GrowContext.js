import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMonths, fetchMonthlyJobs } from "../services/growService";

const GrowContext = createContext();

const GrowProvider = ({ children }) => {
  const [months, setMonths] = useState([]);
  const [atAGlance, setAtAGlance] = useState([]);
  const [monthlyJobs, setMonthlyJobs] = useState([]);
  const [produceList, setProduceList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    const init = async () => {
      if (months.length === 0) {
        await handleFetchMonths();
      }
    };
    init();
    clearCache();
  }, [months]);

  // Function: Fetch months of the year
  const handleFetchMonths = async () => {
    try {
      const data = await fetchMonths();
      setMonths(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Function: Fetch monthly jobs by month ID
  const handleFetchMonthlyJobs = async (monthId) => {
    try {
      // Check AsyncStorage for cached data
      const cachedData = await AsyncStorage.getItem(`monthlyJobs-${monthId}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setAtAGlance(parsedData.atAGlance);
        setProduceList(parsedData.produceList);
        setMonthlyJobs(parsedData.monthlyJobs);
        // console.log("parsedDate:", parsedData);

        return parsedData;
      }

      // Fetch data from API
      const data = await fetchMonthlyJobs(monthId);

      // Extract job titles for "At A Glance" view
      const jobTitles = data.produceJobs
        .map((job) => job.job_title)
        .concat(data.generalJobs.map((job) => job.job_title));

      // Store jobs together
      const monthlyJobsData = [...data.produceJobs, ...data.generalJobs];

      // Update state
      setAtAGlance(jobTitles);
      setMonthlyJobs(monthlyJobsData);
      setProduceList(data.produceList);

      // // Cache data in AsyncStorage
      const jobsToCache = {
        atAGlance: jobTitles,
        produceList: data.produceList,
        monthlyJobs: monthlyJobsData,
      };
      await AsyncStorage.setItem(
        `monthlyJobs-${monthId}`,
        JSON.stringify(jobsToCache)
      );

      return jobsToCache;
    } catch (error) {
      console.error("Error fetching monthly jobs:", error);
      throw error;
    }
  };

  const clearCache = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const jobKeys = keys.filter((key) => key.startsWith("monthlyJobs-"));
      await AsyncStorage.multiRemove(jobKeys);
      console.log("Cache cleared successfully!");
    } catch (error) {
      console.error("Error clearing cache:", error);
    }
  };

  return (
    <GrowContext.Provider
      value={{
        months,
        atAGlance,
        produceList,
        monthlyJobs,
        handleFetchMonthlyJobs,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      {children}
    </GrowContext.Provider>
  );
};

const useGrow = () => {
  const context = useContext(GrowContext);

  if (!context) {
    throw new Error("useGrow must be used within a GrowProvider.");
  }

  return context;
};

export { GrowProvider, useGrow };
