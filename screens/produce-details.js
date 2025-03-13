import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { theme, globalStyles } from "../styles/global";
import { ScrollView } from "react-native-gesture-handler";
import SowSpec from "../components/panels/sow-spec";
import PlantingGuide from "../components/panels/planting-guide";
import ProduceDetailsMenu from "../components/menu-bars/produce-details-menu";
import ProduceBar from "../components/menu-bars/produce-bar";

const ProduceDetails = ({ produceItem, route }) => {
  const item = route?.params?.item || produceItem;
  const [selectedTab, setSelectedTab] = useState(1);
  console.log(item);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {route?.params?.item && (
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.bannerImage}
        >
          <View style={styles.banner}>
            <Text style={styles.bannerText}>
              {item.name[0].toUpperCase() + item.name.slice(1)}
            </Text>
          </View>
        </ImageBackground>
      )}

      <View>
        <Text style={[globalStyles.textCentered, { marginBottom: 10 }]}>
          {item.description}
        </Text>
      </View>

      <ProduceDetailsMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <View>
        {selectedTab === 1 && (
          <View>
            <SowSpec spec={item.produce_months} />
            <PlantingGuide
              depth={item.depth}
              spacing={item.spacing}
              rowDistance={item.row_distance}
            />
            <View style={globalStyles.paragraph}>
              <Text style={globalStyles.titleTextCentered}>Location</Text>
              <Text style={globalStyles.textCentered}>{item.location}</Text>
            </View>
            <View style={globalStyles.paragraph}>
              <Text style={globalStyles.titleTextCentered}>Sowing</Text>
              <Text style={globalStyles.textCentered}>{item.sowing}</Text>
            </View>
            <View style={globalStyles.paragraph}>
              <Text style={globalStyles.titleTextCentered}>Quick Tip</Text>
              <Text style={globalStyles.textCentered}>{item.tips}</Text>
            </View>
          </View>
        )}

        {selectedTab === 2 && (
          <View>
            <Text style={globalStyles.textCentered}>{item.harvesting}</Text>
          </View>
        )}
      </View>

      {selectedTab === 3 && <ProduceBar produce={item.companions} />}
    </ScrollView>
  );
};

export default ProduceDetails;

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 150,
    opacity: 0.5,
    borderRadius: 10,
    marginBottom: 10,
  },
  banner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    backgroundColor: theme.colors.background,
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 28,
    fontFamily: "nunito-bold",
    borderRadius: 10,
    borderColor: theme.colors.secondary,
  },
});
