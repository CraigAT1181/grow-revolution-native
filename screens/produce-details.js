import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { theme, globalStyles } from "../styles/global";
import {
  enableLegacyWebImplementation,
  ScrollView,
} from "react-native-gesture-handler";
import SowSpec from "../components/panels/sow-spec";
import PlantingGuide from "../components/panels/planting-guide";
import ProduceDetailsMenu from "../components/menu-bars/produce-details-menu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PlantCard from "../components/cards/PlantCard";

const ProduceDetails = ({ produceItem, route }) => {
  const item = route?.params?.item || produceItem;
  const [selectedTab, setSelectedTab] = useState("Planting");

  // State to manage visibility of each section
  const [contentTabA, setContentTabA] = useState(false);
  const [contentTabB, setContentTabB] = useState(false);
  const [contentTabC, setContentTabC] = useState(false);

  // Toggle functions for each section
  const toggleContentA = () => setContentTabA(!contentTabA);
  const toggleContentB = () => setContentTabB(!contentTabB);
  const toggleContentC = () => setContentTabC(!contentTabC);

  console.log("Produce Item:", item);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={{ uri: item.image }} style={styles.bannerImage}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            {item.name[0].toUpperCase() + item.name.slice(1)}
          </Text>
        </View>
      </ImageBackground>

      <View>
        <Text style={styles.text}>{item.description}</Text>
      </View>

      <ProduceDetailsMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <View style={{ minHeight: 500 }}>
        {selectedTab === "Planting" && (
          <View>
            <SowSpec spec={item.produce_months} />
            <PlantingGuide
              depth={item.depth}
              spacing={item.spacing}
              rowDistance={item.row_distance}
            />
            <View style={{ marginBottom: 20 }}>
              {/* Location Section */}
              <SectionToggle
                title="Location"
                icon="map-marker"
                content={item.location}
                isVisible={contentTabA}
                toggleVisibility={toggleContentA}
              />

              <View style={styles.hr} />

              {/* Propagation Section */}
              <SectionToggle
                title="Propagation"
                icon="seedling"
                content={item.sowing}
                isVisible={contentTabB}
                toggleVisibility={toggleContentB}
              />

              <View style={styles.hr} />

              {/* Tips Section */}
              <SectionToggle
                title="Tips"
                icon="exclamation"
                content={item.tips}
                isVisible={contentTabC}
                toggleVisibility={toggleContentC}
              />
            </View>
          </View>
        )}

        {selectedTab === "Harvesting" && (
          <View>
            <Text style={globalStyles.textCentered}>{item.harvesting}</Text>
          </View>
        )}

        {selectedTab === "Companions" && (
          <View>
            <View style={{ minHeight: 220 }}>
              <FlatList
                data={item.companionList}
                keyExtractor={(item) => item.produce_id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuData}
                renderItem={({ item }) => (
                  <View style={styles.cardContainer}>
                    <PlantCard produce={item} />
                  </View>
                )}
              />
            </View>
            <View>
              <Text style={styles.text}>{item.companions}</Text>
            </View>
          </View>
        )}

        {selectedTab === "Care" && (
          <View>
            <Text style={styles.text}>{item.care}</Text>
          </View>
        )}

        {selectedTab === "Uses" && (
          <View>
            {item.uses.map((use) => (
              <View
                key={use.name}
                style={{
                  alignItems: "center",

                  padding: 10,
                  margin: 10,
                }}
              >
                <FontAwesome5
                  name={use.uses.icon}
                  size={48}
                  style={styles.useIcon}
                />
                <Text style={[styles.text, { fontFamily: "bold" }]}>
                  {use.uses.name}
                </Text>
                <Text style={styles.text}>{use.description}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProduceDetails;

const SectionToggle = ({
  title,
  icon,
  content,
  isVisible,
  toggleVisibility,
}) => {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleVisibility}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name={icon} size={16} />
          </View>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        <FontAwesome5
          name={isVisible ? "chevron-up" : "chevron-down"}
          size={16}
          style={styles.chevron}
        />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.content}>
          <Text>{content ?? "No information available."}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  bannerImage: {
    minHeight: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  banner: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    width: 220,
    borderRadius: 10,
  },
  bannerText: {
    fontFamily: "nunito-thin",
    fontSize: 32,
    color: theme.colors.textOnPrimary,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
    lineHeight: 25,
    marginVertical: 20,
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
  },
  titleContainer: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 16,
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
    marginRight: 10,
  },
  chevron: {
    marginLeft: 10,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },

  cardContainer: {
    paddingHorizontal: 6,
    width: 200,
    height: "auto",
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
  },
  useIcon: {
    color: theme.colors.secondary,
  },
});
