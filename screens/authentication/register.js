import react from "react";
import { View, Text, Button } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View>
      <Text>Already have an account?</Text>
      <Button title={"Sign In"} onPress={() => navigation.replace("SignIn")} />
    </View>
  );
};

export default Register;
