import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { useGrow } from "../contexts/GrowContext";
import EncyclopediaGrid from "../components/grids/encyclopedia-grid";

const GrowSearch = () => {
  const { handleFetchProduceList, produceList } = useGrow();

  useEffect(() => {
    handleFetchProduceList();
  }, []);

  return (
    <View style={globalStyles.screen}>
      <EncyclopediaGrid array={produceList} />
    </View>
  );
};

export default GrowSearch;
