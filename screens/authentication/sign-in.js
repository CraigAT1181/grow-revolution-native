import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/buttons/primary-button";
import SecondaryButton from "../../components/buttons/secondary-button";
import { globalStyles } from "../../styles/global";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useAuth } from "../../contexts/AuthContext";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const SignInScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const { signin } = useAuth();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            setIsLoading(true);
            try {
              setError(null);
              await signin(values.email, values.password);
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
                    name={passwordVisible ? "eye" : "eye-slash"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <Text style={globalStyles.errorText}>
                {formikProps.touched.password && formikProps.errors.password}
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
        <View style={styles.resetPasswordContainer}>
          <Text>Having problems signing in?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("PasswordReset")}
          >
            <Text style={styles.resetPasswordText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!isKeyboardVisible && (
        <View>
          <Text style={styles.registerText}>Don't have an account yet?</Text>
          <SecondaryButton
            text={"Register"}
            onPress={() => navigation.replace("Register")}
          />
        </View>
      )}
    </View>
  );
};

export default SignInScreen;

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
    top: 32,
  },
  resetPasswordContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  resetPasswordText: {
    color: "crimson",
  },
  registerText: {
    textAlign: "center",
    marginVertical: 8,
  },
});
