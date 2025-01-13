import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

const stack = createStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  );
};

export default HomeStack;
