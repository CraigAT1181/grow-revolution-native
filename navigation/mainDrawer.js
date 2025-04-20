import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./mainTabs";
import { useAuth } from "../contexts/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DrawerMenuButton from "../components/buttons/drawer-menu-button";
import { theme, globalStyles } from "../styles/global";
import SecondaryButton from "../components/buttons/secondary-button";

const Drawer = createDrawerNavigator();

// Create Profile section of Drawer
const ProfileHeader = ({ userName, email, profilePic }) => (
  <View style={styles.profileContainer}>
    <View>
      {profilePic ? (
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
      ) : (
        <FontAwesome5
          name={"user"}
          size={25}
          style={styles.noProfilePicAvatar}
        />
      )}
    </View>
    <View style={styles.userInfoContainer}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  </View>
);

// Create Content section of Drawer
const DrawerContent = ({ setSelectedTab, navigation }) => {
  const { user, signout } = useAuth();

  let encodedProfilePic = null;

  if (user.profile_pic) {
    const profilePic = user.profile_pic;
    encodedProfilePic = encodeURI(profilePic);
  }
  const userName = user.user_name;
  const email = user.email;

  return (
    <View style={globalStyles.viewContainer}>
      <View>
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
            onPress={() => {
              setSelectedTab(0);
              navigation.navigate("Tabs", { screen: "Home" });
            }}
          />
          <DrawerMenuButton
            icon={"leaf"}
            text="Grow"
            onPress={() => {
              setSelectedTab(1);
              navigation.navigate("Tabs", { screen: "GrowStack" });
            }}
          />
          <DrawerMenuButton
            icon={"users"}
            text="Community"
            onPress={() => {
              setSelectedTab(2);
              navigation.navigate("Tabs", { screen: "Community" });
            }}
          />
          <DrawerMenuButton
            icon={"book-open"}
            text="Ads"
            onPress={() => {
              setSelectedTab(3);
              navigation.navigate("Tabs", { screen: "AdPage" });
            }}
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
          <DrawerMenuButton
            icon={"cog"}
            text="Settings"
            onPress={() => navigation.navigate("Tabs", { screen: "#" })}
          />
        </View>
      </View>
      {/* Sign-Out Section */}
      <View style={styles.signoutSection}>
        <SecondaryButton text="Sign Out" onPress={signout} />
      </View>
    </View>
  );
};

// Import DrawerContent from above and return the MainTabs component in screen.
const MainDrawer = () => {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent setSelectedTab={setSelectedTab} {...props} />
      )}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Tabs">
        {() => (
          <MainTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({
  profileHeaderBackground: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  profileContainer: {
    padding: 50,
    marginBottom: 20,
    marginHorizontal: -20,
    alignItems: "center",
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.primary,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  userInfoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    fontSize: 16,
    fontFamily: "semibold",
    color: theme.colors.textOnPrimary,
  },
  email: {
    fontSize: 14,
    fontFamily: "light",
    color: theme.colors.textOnPrimary,
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
    color: theme.colors.textOnPrimary,
  },
  signoutSection: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: 50,
    paddingBottom: 20,
  },
});
