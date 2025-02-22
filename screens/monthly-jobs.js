import React, { useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text, StyleSheet } from "react-native";
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
          <View style={styles.section}>
            <Text style={globalStyles.titleText}>Featuring this month</Text>
            <ProduceBar produce={produceList} />
          </View>
        </View>
      )}
    </View>
  );
};

export default MonthlyJobs;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
  },
});
