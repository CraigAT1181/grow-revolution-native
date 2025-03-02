import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { colours } from "../../styles/global";

const SowSpec = ({ spec }) => {
  const [data, setData] = useState({
    sowIndoors: [],
    sowOutdoors: [],
    plantOut: [],
    harvest: [],
  });

  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const colors = {
    sowIndoors: "blue",
    sowOutdoors: "green",
    plantOut: "purple",
    harvest: "orange",
  };

  useEffect(() => {
    try {
      const updateSpec = async () => {
        let newData = {
          sowIndoors: [],
          sowOutdoors: [],
          plantOut: [],
          harvest: [],
        };

        spec.forEach((item) => {
          if (item.action === "sow indoors") {
            newData.sowIndoors.push(item.month_id);
          }

          if (item.action === "sow outdoors") {
            newData.sowOutdoors.push(item.month_id);
          }
          if (item.action === "plant out") {
            newData.plantOut.push(item.month_id);
          }
          if (item.action === "harvest") {
            newData.harvest.push(item.month_id);
          }
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
        backgroundColor: colours.background,
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
