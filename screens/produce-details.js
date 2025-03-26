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
import { ScrollView } from "react-native-gesture-handler";
import SowSpec from "../components/panels/sow-spec";
import PlantingGuide from "../components/panels/planting-guide";
import ProduceDetailsMenu from "../components/menu-bars/produce-details-menu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PlantCard from "../components/cards/PlantCard";

const ProduceDetails = ({ produceItem, route }) => {
  const item = route?.params?.item || produceItem;
  const [selectedTab, setSelectedTab] = useState("Planting");
  const [contentTabA, setContentTabA] = useState(0);
  const [contentTabB, setContentTabB] = useState(0);
  const [contentTabC, setContentTabC] = useState(0);

  const toggleContentA = () => {
    setContentTabA(!contentTabA);
  };

  const toggleContentB = () => {
    setContentTabB(!contentTabB);
  };

  const toggleContentC = () => {
    setContentTabC(!contentTabC);
  };

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
        <Text style={styles.description}>{item.description}</Text>
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
              <View>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    elevation: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  onPress={() => toggleContentA()}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        alignItems: "center",
                        marginRight: 10,
                      }}
                    >
                      <FontAwesome5 name={"map-marker"} size={16} />
                    </View>
                    <Text>Location</Text>
                  </View>
                  <View>
                    <FontAwesome5
                      name={contentTabA ? "chevron-up" : "chevron-down"}
                      size={16}
                      style={styles.chevron}
                    />
                  </View>
                </TouchableOpacity>
                {contentTabA && (
                  <View style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                    <Text>
                      {item.location ?? "No location information available."}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.hr} />
              <View>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    elevation: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  onPress={() => toggleContentB()}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        alignItems: "center",
                        marginRight: 10,
                      }}
                    >
                      <FontAwesome5 name={"seedling"} size={16} />
                    </View>
                    <Text>Propagation</Text>
                  </View>
                  <View>
                    <FontAwesome5
                      name={contentTabB ? "chevron-up" : "chevron-down"}
                      size={16}
                      style={styles.chevron}
                    />
                  </View>
                </TouchableOpacity>
                {contentTabB && (
                  <View style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                    <Text>
                      {item.sowing ?? "No sowing information available."}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.hr} />
              <View>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    elevation: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  onPress={() => toggleContentC()}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        alignItems: "center",
                        marginRight: 10,
                      }}
                    >
                      <FontAwesome5 name={"exclamation"} size={16} />
                    </View>
                    <Text>Tips</Text>
                  </View>
                  <View>
                    <FontAwesome5
                      name={contentTabC ? "chevron-up" : "chevron-down"}
                      size={16}
                      style={styles.chevron}
                    />
                  </View>
                </TouchableOpacity>
                {contentTabC && (
                  <View style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                    <Text>{item.tips ?? "No tips information available."}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}

        {selectedTab === "Harvesting" && (
          <View>
            <Text style={globalStyles.textCentered}>{item.harvesting}</Text>
          </View>
        )}

        {selectedTab === "Companions" && (
          <View style={{ minHeight: 220 }}>
            <FlatList
              data={item.companions}
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
        )}

        {/* {
          selectedTab === "Care" && (

          )
        } */}
      </View>
    </ScrollView>
  );
};

export default ProduceDetails;

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
  description: {
    fontSize: 18,
    fontFamily: "nunito-regular",
    textAlign: "center",
    lineHeight: 25,
    marginVertical: 20,
    padding: 10,
  },
  chevron: {
    color: theme.colors.textOnBackground,
  },
  cardContainer: {
    paddingHorizontal: 6,
    width: 200,
    height: "auto",
  },
  hr: {
    height: 1,
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
});
