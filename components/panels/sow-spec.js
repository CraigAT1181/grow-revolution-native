import React from "react";
import { View, Text } from "react-native";
import { colours } from "../../styles/global";

const SowSpec = ({ produceItem }) => {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const colors = {
    sowIndoors: "blue",
    sowOutdoors: "green",
    plantOut: "purple",
    harvest: "orange",
  };

  const data = {
    sowIndoors: [0, 1, 2, 3], // Jan-Apr
    sowOutdoors: [2, 3, 4, 5], // Mar-Jun
    plantOut: [4, 5, 6], // May-Jul
    harvest: [7, 8, 9, 10], // Aug-Nov
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colours.background,
        paddingBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {months.map((month, index) => (
          <View
            key={index}
            style={{ flexDirection: "column", marginHorizontal: 2 }}
          >
            <Text style={{ fontSize: 12, textAlign: "center" }}>{month}</Text>
            <View
              style={{
                width: 20,
                height: 60,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {Object.keys(data).map((key) =>
                data[key].includes(index) ? (
                  <View
                    key={key}
                    style={{
                      width: 20,
                      height: 12,
                      backgroundColor: colors[key],
                      marginVertical: 1,
                    }}
                  />
                ) : null
              )}
            </View>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {Object.keys(colors).map((key) => (
          <View
            key={key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: colors[key],
                marginRight: 5,
              }}
            />
            <Text style={{ fontSize: 12 }}>
              {key.replace(/([A-Z])/g, " $1")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SowSpec;
