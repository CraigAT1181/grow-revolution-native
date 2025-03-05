import React, { useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import SowGrid from "../components/grids/sow-grid";
import JobGrid from "../components/grids/job-grid";
import { FlatList } from "react-native-gesture-handler";

const MonthlyData = () => {
  const { cropsToSow, jobsToDo, handleFetchMonthlyData, selectedMonth } =
    useGrow();

  const sections = [
    { id: 1, component: <SowGrid array={cropsToSow} /> },
    { id: 2, component: <JobGrid array={jobsToDo} /> },
  ];

  useEffect(() => {
    const fetchMonthData = async () => {
      try {
        await handleFetchMonthlyData(selectedMonth);
      } catch (error) {
        console.error("Error fetching monthly job info:", error);
        setError(error);
      }
    };

    fetchMonthData();
  }, [selectedMonth]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        ListFooterComponent={<View style={{ height: 70 }} />}
      />
    </View>
  );
};

export default MonthlyData;

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});
