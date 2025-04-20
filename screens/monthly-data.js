import React, { useMemo, useEffect, useState } from "react";
import { useGrow } from "../contexts/GrowContext";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { theme, globalStyles } from "../styles/global";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import PlantGroupCard from "../components/cards/PlantGroupCard";
import ToggleViewButton from "../components/buttons/toggle-view-button";
import MonthBar from "../components/menu-bars/month-bar";
import GrowSearchIcon from "../components/menu-bars/grow-search-icon";

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
  const [introClicked, setIntroClicked] = useState(false);

  const monthIntro = useMemo(() => {
    const intro =
      months.find((month) => month.month_id === selectedMonth)?.introduction ??
      "";

    return introClicked ? intro : intro.slice(0, 100) + "...";
  }, [selectedMonth, months, introClicked]);

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
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={require("../assets/backgrounds/green_background.jpg")}
        style={styles.bannerImage}
        resizeMode="cover"
      >
        <View style={styles.searchIconContainer}>
          <GrowSearchIcon />
        </View>
        <MonthBar />
      </ImageBackground>

      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => setIntroClicked(!introClicked)}>
          <View style={styles.introContainer}>
            <Text
              style={[
                // styles.monthIntro,
                theme.typography.body,
                { color: theme.colors.textOnBackground },
              ]}
            >
              {monthIntro}
            </Text>
          </View>
        </TouchableOpacity>

        <ToggleViewButton
          title={"Sow or plant this month"}
          showContainer={showSowContainer}
          setShowContainer={setShowSowContainer}
        />
        {showSowContainer && (
          <View style={{ minHeight: 220 }}>
            <FlatList
              data={cropsToSow}
              keyExtractor={(item) => item.sow_id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.menuData}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <PlantGroupCard
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
          </View>
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
  );
};

export default MonthlyData;

const styles = StyleSheet.create({
  bannerImage: {
    minHeight: 200,
    paddingVertical: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  searchIconContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 30,
  },
  introContainer: {
    // flexShrink: 0,
    // backgroundColor: "pink",
    // padding: 20,
  },

  monthIntro: {
    color: "#fff",
    fontSize: 16,
    fontFmaily: "semiboldBold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    // borderTopLeftRadius: 18,
    // borderTopRightRadius: 18,
    padding: 20,
    // marginTop: -20,
  },
  menuData: {
    height: "auto",
    alignItems: "center",
  },
  cardContainer: {
    paddingHorizontal: 6,
    width: 200,
    height: "auto",
  },
});
