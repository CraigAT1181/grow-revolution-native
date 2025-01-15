import react from "react";
import { globalStyles } from "../../styles/global";
import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          location: "",
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
            <TextInput
              style={globalStyles.input}
              placeholder="Username"
              onChangeText={formikProps.handleChange("username")}
              value={formikProps.values.username}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Location"
              onChangeText={formikProps.handleChange("location")}
              value={formikProps.values.location}
            />
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
      <Text>Already have an account?</Text>
      <Button title={"Sign In"} onPress={() => navigation.replace("SignIn")} />
    </View>
  );
};

export default Register;
