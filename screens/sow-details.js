import React, { useState } from "react";
import { View } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import ProduceDetails from "./produce-details";

const SowDetails = ({ route }) => {
  const { produce } = route.params;
  const [selectedItem, setSelectedItem] = useState(0);
  console.log("selectedItem", selectedItem);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ProduceBar
          produce={produce}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ProduceDetails produceItem={produce[selectedItem]} />
      </View>
    </View>
  );
};

export default SowDetails;
