import { createStackNavigator } from "@react-navigation/stack";
import Grow from "../screens/grow";
import ProduceDetails from "../screens/produce-details";
import SowDetails from "../screens/sow-details";
import JobDetails from "../screens/job-details";

const Stack = createStackNavigator();

const GrowStack = () => {
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
          title: route.params.title || "",
          headerTransparent: false,
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
    </Stack.Navigator>
  );
};

export default GrowStack;
