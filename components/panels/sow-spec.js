import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { theme } from "../../styles/global";

const SowSpec = ({ spec }) => {
  const [data, setData] = useState({});

  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const colors = {
    "sow indoors": "#7AA2E3", // Soft Cornflower Blue
    "sow undercover": "#E6A4B4", // Muted Rose
    "sow outdoors": "#9BCF53", // Sage Green
    transplant: "#A3D8F4", // Light Sky Blue
    "plant out": "#C49BBB", // Dusty Lavender
    harvest: "#EEC373", // Warm Goldenrod
  };

  useEffect(() => {
    try {
      const updateSpec = async () => {
        let newData = {};

        spec.forEach(({ action, month_id }) => {
          if (!newData[action]) newData[action] = [];
          newData[action].push(month_id);
        });

        setData(newData);
      };

      updateSpec();
    } catch (error) {
      console.error("Unable to update spec:", error);
    }
  }, [spec]);

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: theme.colors.background,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 30,
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
                Array.isArray(data[key]) && data[key].includes(index) ? (
                  <View
                    key={key}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      backgroundColor: colors[key],
                      marginVertical: 2,
                    }}
                  />
                ) : null
              )}
            </View>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {Object.keys(data).map((key) => (
          <View
            key={key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 1,
              marginHorizontal: 5,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: colors[key],
                marginRight: 5,
              }}
            />
            <Text style={{ fontSize: 12 }}>
              {key[0].toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SowSpec;
