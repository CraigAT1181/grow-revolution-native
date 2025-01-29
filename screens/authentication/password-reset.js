import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import PrimaryButton from "../../components/primary-button";
import { useAuth } from "../../contexts/AuthContext";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

const PasswordReset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const { passwordResetRequest } = useAuth();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={async (values) => {
            setIsLoading(true);
            setMessage(null);
            setError(null);
            try {
              const response = await passwordResetRequest(values.email);

              setMessage(response);
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

              {error && <Text style={globalStyles.errorText}>{error}</Text>}
              {message && <Text style={styles.successText}>{message}</Text>}
              {!message && (
                <PrimaryButton
                  text="Confirm"
                  onPress={formikProps.handleSubmit}
                  loading={isLoading}
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  successText: {
    color: "green",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});
