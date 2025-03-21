import { createStackNavigator } from "@react-navigation/stack";
import Grow from "../screens/grow";
import ProduceDetails from "../screens/produce-details";
import SowDetails from "../screens/sow-details";
import JobDetails from "../screens/job-details";
import GrowSearch from "../screens/grow-search";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const GrowStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,

        // headerStyle: {
        //   backgroundColor: "transparent",
        //   elevation: 0,
        //   shadowOpacity: 0,
        // },
      }}
    >
      <Stack.Screen name="Grow" component={Grow} />
      <Stack.Screen
        name="SowDetails"
        component={SowDetails}
        options={({ route }) => ({
          headerShown: true,

          headerBackImage: () => (
            <FontAwesome5
              name="arrow-left"
              size={20}
              color="white"
              style={{ top: 30, left: 20 }}
            />
          ),
          title: route.params.title || "",
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="ProduceDetails"
        component={ProduceDetails}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: false,
        }}
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
