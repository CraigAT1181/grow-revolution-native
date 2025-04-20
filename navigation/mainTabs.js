import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Community from "../screens/community";
import AdPage from "../screens/ad-page";
import GrowStack from "./grow-stack";
import { theme } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MainTabs = ({ selectedTab = 0, setSelectedTab }) => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.drawerToggleButton}
          >
            <FontAwesome5
              name={"bars"}
              size={20}
              color={theme.colors.textOnBackground}
            />
          </TouchableOpacity>
        ),
        headerShown: true,
        headerTransparent: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
        },
        headerTitle: "",
        headerTitleStyle: {
          fontFamily: "extralight",
          fontSize: 32,
        },
        headerTitleAlign: "center",
        headerTintColor: theme.colors.textOnPrimary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name="home"
              size={size}
              color={
                selectedTab === 0
                  ? theme.colors.primary
                  : theme.colors.secondaryLight
              }
            />
          ),
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                setSelectedTab(0);
                navigation.navigate("Home");
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="GrowStack"
        component={GrowStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name="leaf"
              size={size}
              color={
                selectedTab === 1
                  ? theme.colors.primary
                  : theme.colors.secondaryLight
              }
            />
          ),
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                setSelectedTab(1);
                navigation.navigate("GrowStack");
              }}
            />
          ),

          headerTitle: "",
        })}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={({ navigation }) => ({
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name="users"
              size={size}
              color={
                selectedTab === 2
                  ? theme.colors.primary
                  : theme.colors.secondaryLight
              }
            />
          ),
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                setSelectedTab(2);
                navigation.navigate("Community");
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Ads"
        component={AdPage}
        options={({ navigation }) => ({
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name="book-open"
              size={size}
              color={
                selectedTab === 3
                  ? theme.colors.primary
                  : theme.colors.secondaryLight
              }
            />
          ),
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                setSelectedTab(3);
                navigation.navigate("Ads");
              }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  drawerToggleButton: {
    marginLeft: 20,
  },
});
