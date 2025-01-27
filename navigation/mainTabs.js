import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Grow from "../screens/grow";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
                color="gray"
                style={styles.noProfilePicIcon}
              />
            )}
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
