import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { colours, globalStyles } from "../styles/global";
import { ScrollView } from "react-native-gesture-handler";
import SowSpec from "../components/panels/sow-spec";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PlantingGuide from "../components/panels/planting-guide";

const ProduceDetails = ({ route }) => {
  const { produceItem } = route.params;
  console.log("Produce-item:", produceItem);

  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc((prev) => !prev);
  };

  return (
    <ScrollView
      contentContainerStyle={globalStyles.screen}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={{ uri: produceItem.image }}
        style={styles.bannerImage}
      >
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            {produceItem.name[0].toUpperCase() + produceItem.name.slice(1)}
          </Text>
        </View>
      </ImageBackground>

      <TouchableOpacity
        style={{
          marginVertical: 10,
          marginBottom: 30,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colours.secondary,
          paddingVertical: 4,
          alignItems: "center",
        }}
        onPress={handleShowDesc}
      >
        <Text>See description</Text>
      </TouchableOpacity>

      {showDesc && (
        <View style={globalStyles.paragraph}>
          <Text style={globalStyles.text}>{produceItem.description}</Text>
        </View>
      )}

      <SowSpec spec={produceItem.produce_months} />

      <PlantingGuide
        depth={produceItem.depth}
        spacing={produceItem.spacing}
        rowDistance={produceItem.row_distance}
      />

      {/* SOWING CARD */}

      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.titleTextCentered}>Sowing / Planting</Text>
        <Text style={globalStyles.textCentered}>{produceItem.sowing}</Text>
      </View>

      {/* HARVESTING CARD */}

      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.titleTextCentered}>Harvesting</Text>
        <Text style={globalStyles.textCentered}>{produceItem.harvesting}</Text>
      </View>

      {/* LOCATION CARD */}

      <View style={globalStyles.textContainer}>
        <FontAwesome5 name="map-marker-alt" size={24} color={colours.primary} />
        <View style={globalStyles.paragraph}>
          <Text style={globalStyles.textCentered}>{produceItem.location}</Text>
        </View>
      </View>

      {/* TIPS CARD */}

      <View style={globalStyles.textContainer}>
        <FontAwesome5 name="info" size={24} color={colours.primary} />
        <View style={globalStyles.paragraph}>
          <Text style={globalStyles.textCentered}>{produceItem.tips}</Text>
        </View>
      </View>

      {/* PESTS & DISEASES CARD */}

      <View style={globalStyles.textContainer}>
        <FontAwesome5
          name="exclamation-triangle"
          size={24}
          color={colours.primary}
        />

        <View style={globalStyles.paragraph}>
          <Text style={globalStyles.titleTextCentered}>Pests</Text>
          <Text style={globalStyles.textCentered}>{produceItem.pests}</Text>
        </View>
        <View style={globalStyles.paragraph}>
          <Text style={globalStyles.titleTextCentered}>Diseases</Text>
          <Text style={globalStyles.textCentered}>{produceItem.diseases}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProduceDetails;

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 250,
    opacity: 0.5,
    borderRadius: 10,
  },
  banner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    backgroundColor: colours.white,
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 32,
    fontFamily: "nunito-bold",
    borderWidth: 1,
    borderColor: colours.secondary,
  },
});
