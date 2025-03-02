import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Community from "../screens/community";
import AdPage from "../screens/ad-page";
import GrowStack from "./grow-stack";
import { colours } from "../styles/global";

const Tab = createBottomTabNavigator();

const MainTabs = ({ drawerNavigation }) => {
  const { user } = useAuth();

  let encodedProfilePic = null;

  if (user.profile_pic !== null) {
    const profilePic = user.profile_pic;
    encodedProfilePic = encodeURI(profilePic);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => drawerNavigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            {encodedProfilePic ? (
              <Image
                source={{ uri: encodedProfilePic }}
                style={styles.profilePic}
              />
            ) : (
              <FontAwesome5
                name={"user"}
                size={20}
                color={colours.white}
                style={styles.noProfilePicIcon}
              />
            )}
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: colours.primary },
        headerTitleStyle: {
          fontFamily: "nunito-extra-light",
          fontSize: 32,
        },
        headerTitleAlign: "center",
        headerTintColor: colours.white,
        tabBarStyle: {
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="home" size={size} color={colours.primary} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="GrowStack"
        component={GrowStack}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="leaf" size={size} color={colours.primary} />
          ),
          tabBarLabel: "",
          headerTitle: "Grow",
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="users" size={size} color={colours.primary} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Ads"
        component={AdPage}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name="newspaper"
              size={size}
              color={colours.primary}
            />
          ),
          tabBarLabel: "",
        }}
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
    borderColor: colours.secondary,
    marginRight: 20,
  },
  noProfilePicIcon: {
    borderRadius: 50,
    marginRight: 20,
  },
});
