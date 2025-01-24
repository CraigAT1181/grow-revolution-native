import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Grow from "../screens/grow";
import { TouchableOpacity, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = ({ drawerNavigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => drawerNavigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Text>X</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Grow" component={Grow} />
    </Tab.Navigator>
  );
};

export default MainTabs;
