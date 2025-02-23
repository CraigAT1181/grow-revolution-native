import React, { useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text, StyleSheet } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import { getAlternateBackground, globalStyles } from "../styles/global";
import AtAGlance from "../components/panels/at-a-glance";

const MonthlyJobs = () => {
  const { monthlyJobs, handleFetchMonthlyJobs, selectedMonth } = useGrow();

  const sections = [
    { id: 1, component: <ProduceBar /> },
    { id: 2, component: <AtAGlance /> },
  ];

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
      <View>
        {sections.map((section, index) => (
          <View
            key={section.id}
            style={[
              styles.sectionContainer,
              { backgroundColor: getAlternateBackground(index) },
            ]}
          >
            {section.component}
          </View>
        ))}
      </View>
    </View>
  );
};

export default MonthlyJobs;

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});
