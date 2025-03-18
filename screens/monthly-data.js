import React, { useMemo, useEffect, useState } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../styles/global";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import PlantCard from "../components/cards/PlantCard";
import ToggleViewButton from "../components/buttons/toggle-view-button";
import MonthBar from "../components/menu-bars/month-bar";

const MonthlyData = () => {
  const {
    months,
    cropsToSow,
    jobsToDo,
    handleFetchMonthlyData,
    selectedMonth,
  } = useGrow();

  const [showSowContainer, setShowSowContainer] = useState(false);
  const [showJobsContainer, setShowJobsContainer] = useState(false);

  const monthIntro = useMemo(() => {
    return months.find((month) => month.month_id === selectedMonth)
      .introduction;
  }, [selectedMonth, months]);

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
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={require("../assets/backgrounds/green_background.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <MonthBar />
        </ImageBackground>

        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.monthIntro,
              theme.typography.body,
              { color: theme.colors.textOnBackground },
            ]}
          >
            {monthIntro}
          </Text>

          <ToggleViewButton
            title={"Sow or plant this month"}
            showContainer={showSowContainer}
            setShowContainer={setShowSowContainer}
          />
          {showSowContainer && (
            <FlatList
              data={cropsToSow}
              keyExtractor={(item) => item.sow_id}
              horizontal
              contentContainerStyle={styles.menuData}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <PlantCard
                    plant={{
                      produce: item.produce,
                      image: item.produce[0].image,
                      name: item.name[0].toUpperCase() + item.name.slice(1),
                      description: item.description,
                    }}
                  />
                </View>
              )}
            />
          )}

          <ToggleViewButton
            title={"Jobs to do this month"}
            showContainer={showJobsContainer}
            setShowContainer={setShowJobsContainer}
          />
          {showJobsContainer && (
            <FlatList
              data={jobsToDo}
              keyExtractor={(item) => item.job_id}
              horizontal
              contentContainerStyle={styles.menuData}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <Text>{item.job_title}</Text>
                  <Text>{item.job_description}</Text>
                </View>
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  background: {
    minHeight: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  introContainer: {
    flexShrink: 0,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  monthIntroBackground: {
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 16,
    marginHorizontal: 20,
    alignSelf: "center",
    maxWidth: "90%",
  },
  monthIntro: {
    color: "#fff",
    fontSize: 16,
    fontFmaily: "nunito-SemiBold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 20,
    marginTop: -20,
  },
  menuData: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardContainer: {
    paddingHorizontal: 6,
  },
});
