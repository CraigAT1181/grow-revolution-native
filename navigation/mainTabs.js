import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Grow from "../screens/grow";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Community from "../screens/community";
import AdPage from "../screens/ad-page";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
                color="#064e3b"
                style={styles.noProfilePicIcon}
              />
            )}
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: "#260F07" },
        headerTintColor: "white",
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
            <FontAwesome5 name="home" size={size} color={"#260F07"} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Grow"
        component={Grow}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="seedling" size={size} color={"#260F07"} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="users" size={size} color={"#260F07"} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Ads"
        component={AdPage}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="newspaper" size={size} color={"#260F07"} />
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
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 20,
  },
  noProfilePicIcon: {
    borderRadius: 50,
    marginRight: 20,
  },
});
