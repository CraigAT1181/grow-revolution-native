import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/authentication/sign-in";
import Register from "../screens/authentication/register";
import PasswordReset from "../screens/authentication/password-reset";
import NewPassword from "../screens/authentication/new-password";
import { colours } from "../styles/global";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: { backgroundColor: colours.primary },
        headerTintColor: colours.white,
      }}
    >
      <Stack.Screen
        name="SignIn"
        options={{ headerTitle: "Sign In" }}
        component={SignInScreen}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="PasswordReset"
        options={{ headerTitle: "Reset Password" }}
        component={PasswordReset}
      />
      <Stack.Screen
        name="NewPassword"
        options={{ headerTitle: "Enter new password." }}
        component={NewPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
