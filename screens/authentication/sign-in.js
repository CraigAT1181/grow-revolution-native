import react, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/primary-button";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const SignIn = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur.email}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Password"
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
                onBlur={formikProps.handleBlur.password}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <FontAwesome5
                  name={passwordVisible ? "eye" : "eye-slash"} // Dynamically toggle the icon
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
            <PrimaryButton text="Submit" onPress={formikProps.handleSubmit} />
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

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 12,
  },
});
