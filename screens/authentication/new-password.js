import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const NewPassword = ({ accessToken }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={async (values) => {
            setIsLoading(true);
            try {
              console.log(values);
            } catch (error) {
              const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "An unexpected error occured, please try again.";
              setError(errorMessage);
            } finally {
              setIsLoading(false);
            }
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <View>
              <Text>Email</Text>
              <TextInput
                style={globalStyles.input}
                onChangeText={formikProps.handleChange("email")}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur("email")}
                onEndEditing={(e) =>
                  formikProps.setFieldValue("email", e.nativeEvent.text)
                }
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.email && formikProps.errors.email}
              </Text>
              <View>
                <Text>Password</Text>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={formikProps.handleChange("password")}
                  value={formikProps.values.password}
                  onBlur={formikProps.handleBlur("password")}
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
              <View>
                <Text>Re-enter Password</Text>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={formikProps.handleChange("repeatPassword")}
                  value={formikProps.values.repeatPassword}
                  onBlur={formikProps.handleBlur("repeatPassword")}
                  secureTextEntry={!repeatPasswordVisible}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() =>
                    setRepeatPasswordVisible(!repeatPasswordVisible)
                  }
                >
                  <FontAwesome5
                    name={repeatPasswordVisible ? "eye" : "eye-slash"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <Text style={globalStyles.errorText}>
                {formikProps.touched.repeatPassword &&
                  formikProps.errors.repeatPassword}
              </Text>
              {error && <Text style={globalStyles.errorText}>{error}</Text>}
              <PrimaryButton
                text="Confirm"
                onPress={formikProps.handleSubmit}
                loading={isLoading}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default NewPassword;
