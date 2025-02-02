import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./mainTabs";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DrawerMenuButton from "../components/buttons/drawer-menu-button";
import { globalStyles } from "../styles/global";
import SecondaryButton from "../components/buttons/secondary-button";

const Drawer = createDrawerNavigator();

// Create Profile section of Drawer
const ProfileHeader = ({ userName, email, profilePic }) => (
  <View style={styles.profileContainer}>
    {profilePic ? (
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
    ) : (
      <FontAwesome5 name={"user"} size={25} style={styles.noProfilePicAvatar} />
    )}
    <Text style={styles.userName}>{userName}</Text>
    <Text style={styles.email}>{email}</Text>
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
  const email = user.email;

  return (
    <View style={{ flex: 1 }}>
      {/* Profile Section */}
      <ProfileHeader
        userName={userName}
        email={email}
        profilePic={encodedProfilePic}
      />

      {/* Menu Items */}
      <View>
        <DrawerMenuButton
          icon={"home"}
          text="Home"
          onPress={() => navigation.navigate("Tabs", { screen: "Home" })}
        />
        <DrawerMenuButton
          icon={"seedling"}
          text="Grow"
          onPress={() => navigation.navigate("Tabs", { screen: "Grow" })}
        />
        <DrawerMenuButton
          icon={"users"}
          text="Community"
          onPress={() => navigation.navigate("Tabs", { screen: "Community" })}
        />
        <DrawerMenuButton
          icon={"newspaper"}
          text="Ads"
          onPress={() => navigation.navigate("Tabs", { screen: "AdPage" })}
        />
        <DrawerMenuButton
          icon={"envelope"}
          text="Inbox"
          onPress={() => navigation.navigate("Tabs", { screen: "#" })}
        />
        <DrawerMenuButton
          icon={"bell"}
          text="Notifications"
          onPress={() => navigation.navigate("Tabs", { screen: "#" })}
        />
        <View style={globalStyles.hrContainer}>
          <View style={globalStyles.hr}></View>
        </View>
        <DrawerMenuButton
          icon={"cog"}
          text="Settings"
          onPress={() => navigation.navigate("Tabs", { screen: "#" })}
        />
      </View>

      {/* Sign-Out Section */}
      <View style={{ padding: 20 }}>
        <SecondaryButton text="Sign Out" onPress={signout} />
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
    backgroundColor: "#260F07",
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 4,
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
