import { createStackNavigator } from "@react-navigation/stack";
import Grow from "../screens/grow";
import ProduceDetails from "../screens/produce-details";
import SowDetails from "../screens/sow-details";
import JobDetails from "../screens/job-details";
import GrowSearch from "../screens/grow-search";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../styles/global";

const Stack = createStackNavigator();

const GrowStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Grow" component={Grow} />
      <Stack.Screen
        name="SowDetails"
        component={SowDetails}
        options={({ navigation, route }) => ({
          headerShown: true,

          headerLeft: () => (
            <TouchableOpacity
              style={{ position: "absolute", top: 36, left: 20, padding: 10 }}
              onPress={() => navigation.goBack()}
            >
              <FontAwesome5
                name="arrow-left"
                size={20}
                color={theme.colors.textOnPrimary}
              />
            </TouchableOpacity>
          ),
          title: route.params.title || "",
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="ProduceDetails"
        component={ProduceDetails}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{ position: "absolute", top: 36, left: 20, padding: 10 }}
              onPress={() => navigation.goBack()}
            >
              <FontAwesome5
                name="arrow-left"
                size={20}
                color={theme.colors.textOnPrimary}
              />
            </TouchableOpacity>
          ),
          title: route.params.title || "",
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.title || "",
          headerTransparent: false,
        })}
      />
      <Stack.Screen
        name="GrowSearch"
        component={GrowSearch}
        options={({ route }) => ({
          headerShown: true,
          // title: route.params.title || "",
          headerTransparent: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default GrowStack;
