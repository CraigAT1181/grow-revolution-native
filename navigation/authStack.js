import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/authentication/signup";
import Register from "../screens/authentication/register";
import Authenticate from "../screens/authentication/authenticate";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Authentication" component={Authenticate} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
