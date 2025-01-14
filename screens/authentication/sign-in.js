import react from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Password"
              onChangeText={formikProps.handleChange("password")}
              value={formikProps.values.password}
              secureTextEntry
            />
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>

      <Text>Having problems signing in?</Text>
      <Button
        title={"Reset Password"}
        onPress={() => navigation.navigate("PasswordReset")}
      />
      <Text>Don't have an account yet?</Text>
      <Button
        title={"Register"}
        onPress={() => navigation.replace("Register")}
      />
    </View>
  );
};

export default SignIn;
