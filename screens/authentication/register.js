import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/buttons/primary-button";
import SecondaryButton from "../../components/buttons/secondary-button";
import { globalStyles } from "../../styles/global";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../../contexts/AuthContext";
import mime from "mime";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9](?![-_])[a-zA-Z0-9_-]*$/,
      "Only letters, numbers, _ or - allowed. Cannot start with _ or -."
    )
    .required("Required"),
  location: Yup.string().required("Required"),
});

const Register = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const { register } = useAuth();

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

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === "granted";
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setProfilePic(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Image Picker Error: ", error);
    }
  };

  const packUserDetails = async (
    email,
    password,
    username,
    location,
    profilePic
  ) => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("username", `@${username}`.toLowerCase());
    formData.append("location", location);

    if (profilePic) {
      const mimeType = mime.getType(profilePic) || "image/jpeg";

      const fileExtention = mimeType.split("/")[1];

      formData.append("profilePic", {
        uri: profilePic,
        name: `profile_pic.${fileExtention}`,
        type: mimeType,
      });
    }

    try {
      await register(formData);
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={globalStyles.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
            location: "",
          }}
          onSubmit={async (values) => {
            setIsLoading(true);
            setSubmitError(null);
            try {
              await packUserDetails(
                values.email,
                values.password,
                values.username,
                values.location,
                profilePic
              );
            } catch (error) {
              console.log(`Error: ${error}`);
              setSubmitError(error);
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
              <View>
                <Text>Username</Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder=""
                  onChangeText={formikProps.handleChange("username")}
                  value={formikProps.values.username}
                  onBlur={formikProps.handleBlur("username")}
                />
                <Text style={styles.usernameAt}>@</Text>
              </View>
              <Text style={globalStyles.errorText}>
                {formikProps.touched.username && formikProps.errors.username}
              </Text>
              <Text>Location</Text>
              <TextInput
                style={globalStyles.input}
                onChangeText={formikProps.handleChange("location")}
                value={formikProps.values.location}
                onBlur={formikProps.handleBlur("location")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.location && formikProps.errors.location}
              </Text>

              {profilePic ? (
                <View style={styles.profilePicInput}>
                  <TouchableOpacity onPress={pickImage}>
                    <Image
                      source={profilePic ? { uri: profilePic } : null}
                      style={styles.profileImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setProfilePic(null)}>
                    <Text style={globalStyles.errorText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.profilePicInput}>
                  <Text>No profile picture chosen</Text>
                  <TouchableOpacity onPress={pickImage}>
                    <FontAwesome5
                      name={"camera"}
                      size={80}
                      color="gray"
                      style={styles.cameraIcon}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {submitError && (
                <Text style={globalStyles.errorText}>{submitError}</Text>
              )}
              <PrimaryButton
                text="Confirm"
                onPress={formikProps.handleSubmit}
                loading={isLoading}
              />
            </View>
          )}
        </Formik>
      </View>
      {!isKeyboardVisible && (
        <View style={styles.SigninButtonContainer}>
          <Text style={styles.signinText}>Already have an account?</Text>
          <SecondaryButton
            text={"Sign In"}
            onPress={() => navigation.replace("SignIn")}
          />
        </View>
      )}
    </ScrollView>
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
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 32,
  },
  usernameAt: {
    position: "absolute",
    top: 30,
    left: 10,
    fontSize: 18,
    color: "#ccc",
  },
  signinText: {
    textAlign: "center",
    marginVertical: 8,
  },
  imagePickerButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ccc",
    marginVertical: 10,
  },
  cameraIcon: {
    marginVertical: 10,
  },
  profilePicInput: {
    alignItems: "center",
    marginBottom: 10,
  },
  SigninButtonContainer: { padding: 20 },
});
