import React from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./mainTabs";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Drawer = createDrawerNavigator();

// Create Profile section of Drawer
const ProfileHeader = ({ userName, profilePic }) => (
  <View style={styles.profileContainer}>
    {profilePic ? (
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
    ) : (
      <FontAwesome5 name={"user"} size={25} style={styles.noProfilePicAvatar} />
    )}
    <Text style={styles.userName}>{userName}</Text>
  </View>
);

// Create Content section of Drawer
const DrawerContent = ({ navigation }) => {
  const { user, signout } = useAuth();

  let encodedProfilePic = null;

  if (user.profile_pic) {
    const profilePic = user.profile_pic;
    encodedProfilePic = encodeURI(profilePic);
  }
  const userName = user.user_name;

  return (
    <View style={{ flex: 1 }}>
      {/* Profile Section */}
      <ProfileHeader userName={userName} profilePic={encodedProfilePic} />

      {/* Menu Items */}
      <View style={{ flex: 1 }}>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Tabs", { screen: "Home" })}
        />
        <Button
          title="Grow"
          onPress={() => navigation.navigate("Tabs", { screen: "Grow" })}
        />
      </View>

      {/* Sign-Out Section */}
      <View style={{ padding: 20 }}>
        <Button title="Sign Out" onPress={signout} />
      </View>
    </View>
  );
};

// Import DrawerContent from above and return the MainTabs component in screen.
const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Tabs">
        {({ navigation }) => <MainTabs drawerNavigation={navigation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    padding: 50,
    marginBottom: 50,
    alignItems: "center",
    backgroundColor: "#064e3b",
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  noProfilePicIcon: {
    borderRadius: 50,
    marginRight: 20,
    padding: 20,
  },
  noProfilePicAvatar: {
    borderRadius: 50,
    padding: 20,
    color: "white",
  },
});
