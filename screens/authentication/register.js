import react, { useState } from "react";
import { globalStyles } from "../../styles/global";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/primary-button";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SecondaryButton from "../../components/secondary-button";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  username: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});

const Register = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={globalStyles.container}>
      <View style={styles.form}>
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
              <TextInput
                style={globalStyles.input}
                placeholder="Username"
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
                onBlur={formikProps.handleBlur.username}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.username && formikProps.errors.username}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Location"
                onChangeText={formikProps.handleChange("location")}
                value={formikProps.values.location}
                onBlur={formikProps.handleBlur.location}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.location && formikProps.errors.location}
              </Text>
              <PrimaryButton
                text="Confirm"
                onPress={formikProps.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <Text style={styles.signinText}>Already have an account?</Text>
      <SecondaryButton
        text={"Sign In"}
        onPress={() => navigation.replace("SignIn")}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
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
  signinText: {
    textAlign: "center",
    marginVertical: 8,
  },
});
