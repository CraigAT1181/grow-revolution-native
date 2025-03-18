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

const MainTabs = ({ selectedTab, setSelectedTab }) => {
  const navigation = useNavigation();

  const getIconColour = (tabIndex) => {
    return tabIndex === 0
      ? theme.colors.textOnPrimary
      : tabIndex === 1
      ? theme.colors.textOnPrimary
      : null;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <FontAwesome5
              name={"bars"}
              size={20}
              color={getIconColour(selectedTab)}
              style={styles.noProfilePicIcon}
            />
          </TouchableOpacity>
        ),
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
        headerTitleStyle: {
          fontFamily: "nunito-extra-light",
          fontSize: 32,
        },
        headerTitleAlign: "center",
        headerTintColor: theme.colors.textOnPrimary,
        tabBarStyle: {
          paddingTop: 5,
        },
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
              name="newspaper"
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
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    marginRight: 20,
  },
  noProfilePicIcon: {
    borderRadius: 50,
    marginRight: 20,
  },
});
