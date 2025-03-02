import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMonths, fetchMonthlyData } from "../services/growService";

const GrowContext = createContext();

const GrowProvider = ({ children }) => {
  const [months, setMonths] = useState([]);
  const [jobsToDo, setJobsToDo] = useState([]);
  const [cropsToSow, setCropsToSow] = useState([]);
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

  const handleFetchMonthlyData = async (monthId) => {
    try {
      const cachedData = await AsyncStorage.getItem(`monthlyData-${monthId}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setJobsToDo(parsedData.jobsToDo);
        setCropsToSow(parsedData.cropsToSow);
        // setProduceList(parsedData.produceList);

        // console.log("parsedDate:", parsedData);

        return parsedData;
      }

      // Fetch data from API
      const data = await fetchMonthlyData(monthId);

      setJobsToDo(data.jobsData);
      setCropsToSow(data.sowData);
      // setProduceList(data.produceList);

      // // Cache data in AsyncStorage
      const dataToCache = {
        jobsToDo: data.jobsData,
        cropsToSow: data.sowData,
        // produceList: data.produceList,
      };
      await AsyncStorage.setItem(
        `monthlyData-${monthId}`,
        JSON.stringify(dataToCache)
      );

      return dataToCache;
    } catch (error) {
      console.error("Error fetching monthly data:", error);
      throw error;
    }
  };

  const clearCache = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const dataKeys = keys.filter((key) => key.startsWith("monthlyData-"));
      await AsyncStorage.multiRemove(dataKeys);
      console.log("Cache cleared successfully!");
    } catch (error) {
      console.error("Error clearing cache:", error);
    }
  };

  return (
    <GrowContext.Provider
      value={{
        months,
        jobsToDo,
        cropsToSow,
        // produceList,
        handleFetchMonthlyData,
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
