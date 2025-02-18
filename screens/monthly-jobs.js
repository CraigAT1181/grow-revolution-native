import React, { useState, useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import { globalStyles } from "../styles/global";

const MonthlyJobs = ({ selectedMonth }) => {
  const { atAGlance, produceList, monthlyJobs, handleFetchMonthlyJobs } =
    useGrow();
  const currentMonth = new Date().getMonth() + 1;

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
            <Text style={globalStyles.titleText}>Produce this month</Text>
          </View>
          <ProduceBar produce={produceList} />
        </View>
      )}
    </View>
  );
};

export default MonthlyJobs;
