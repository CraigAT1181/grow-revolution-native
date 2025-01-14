import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/authentication/sign-in";
import Register from "../screens/authentication/register";
import PasswordReset from "../screens/authentication/password-reset";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: { backgroundColor: "#333" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="SignIn"
        options={{ headerTitle: "Sign In" }}
        component={SignIn}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="PasswordReset"
        options={{ headerTitle: "Reset Password" }}
        component={PasswordReset}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
