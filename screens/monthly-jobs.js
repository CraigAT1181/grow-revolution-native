import React, { useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import { globalStyles } from "../styles/global";

const MonthlyJobs = () => {
  const {
    atAGlance,
    produceList,
    monthlyJobs,
    handleFetchMonthlyJobs,
    selectedMonth,
  } = useGrow();

  useEffect(() => {
    const fetchMonthData = async () => {
      try {
        await handleFetchMonthlyJobs(selectedMonth);
      } catch (error) {
        console.error("Error fetching monthly job info:", error);
        setError(error);
      }
    };

    fetchMonthData();
  }, [selectedMonth]);

  return (
    <View style={globalStyles.container}>
      {produceList && (
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={globalStyles.titleText}>Featuring this month</Text>
          </View>
          <ProduceBar produce={produceList} />
        </View>
      )}
    </View>
  );
};

export default MonthlyJobs;
