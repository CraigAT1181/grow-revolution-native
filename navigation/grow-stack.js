import { createStackNavigator } from "@react-navigation/stack";
import Grow from "../screens/grow";
import ProduceDetails from "../screens/produce-details";

const Stack = createStackNavigator();

const GrowStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Grow" component={Grow} />
      <Stack.Screen
        name="ProduceDetails"
        component={ProduceDetails}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default GrowStack;
