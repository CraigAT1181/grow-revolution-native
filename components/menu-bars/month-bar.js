import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Modal } from "react-native";
import { theme } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MonthBar = () => {
  const { months, selectedMonth, setSelectedMonth } = useGrow();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={theme.typography.title}>
          {months.find((month) => month.month_id === selectedMonth)?.name}
        </Text>
        <View style={{ position: "absolute", bottom: 8, right: 12 }}>
          <FontAwesome5 name="chevron-down" size={16} />
        </View>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            <FlatList
              data={months}
              // contentContainerStyle={styles.menuData}

              keyExtractor={(item) => item.month_id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedMonth(item.month_id);
                    setIsVisible(false);
                  }}
                >
                  <Text style={theme.typography.title}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default MonthBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    // backgroundColor: "white",
  },
  dropdownButton: {
    backgroundColor: theme.colors.background,
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 20,
    elevation: 4,
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dropdownContainer: {
    backgroundColor: theme.colors.background,
    width: "80%",
    height: 250,
    borderRadius: 8,
    paddingVertical: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  dropdownText: {
    color: theme.colors.primary,
  },

  menuData: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 110,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.textOnPrimary,
  },
  tabText: {
    fontSize: 14,
    color: theme.colors.primary,
    textAlign: "center",
  },
  activeTabText: {
    color: theme.colors.textOnPrimary,
    fontSize: 16,
    fontFamily: "nunito-bold",
  },
});
