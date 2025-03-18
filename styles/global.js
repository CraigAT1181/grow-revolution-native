import { StyleSheet } from "react-native";

export const theme = {
  colors: {
    // 🌱 Primary Colors (Earthy Green Tones)
    primary: "#405743",

    // 🌾 Secondary & Accent Colors
    secondary: "#424949",
    secondaryLight: "#8D9696",

    // ✨ Accent Colors (Warm Highlights)
    accent: "#FFC107", // Warm golden yellow (for highlights)
    accentLight: "#FFD54F", // Lighter golden yellow
    accentDark: "#FFA000", // Darker orange-yellow (for warnings)

    // 🎨 Background & Surface Colors
    background: "#FFFFFF", // White (main app background)
    backgroundDark: "#263238", // Deep slate grey (dark mode bg)

    // ✍️ Text Colors (High Readability)
    textPrimary: "#212121", // Dark grey-black (main text)
    textSecondary: "#616161", // Medium grey (subtext, labels)
    textOnPrimary: "#FFFFFF", // White (for text on green backgrounds)
    textOnSecondary: "#FFEAC9", // Cream (for text on brown backgrounds)
    textOnBackground: "#263238", // Dark blue-grey (for contrast)

    // 🚦 Status & Feedback Colors
    success: "#4CAF50", // Vibrant green (successful actions)
    warning: "#FFA726", // Orange (warnings)
    error: "#D32F2F", // Deep red (errors)
    info: "#29B6F6", // Sky blue (information messages)

    // 🛠️ Utility Colors (Borders, Dividers, Shadows)
    border: "#BDBDBD", // Soft grey (for input borders)
    shadow: "#00000040", // Subtle shadow (for depth)
    divider: "#9E9E9E", // Medium grey (section dividers)
  },

  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },

  typography: {
    title: {
      fontSize: 24,
      fontFamily: "nunito-SemiBold",
      color: "#212121",
    },
    body: {
      fontSize: 18,
      fontFamily: "nunito-light",
      lineHeight: 28,
      textAlign: "start",
    },
    caption: {
      fontSize: 12,
      color: "#9E9E9E",
    },
  },
};

export const colours = {
  primary: "#116530",
  secondary: "#2c2c2c",
  background: "#F5F5F5",
  transparent: "transparent",
  text: "#212121",
  white: "#FFFFFF",
  black: "#000000",
  danger: "#FF5252",
  success: "#4CAF50",
};

export const getAlternateBackground = (index) =>
  index % 2 === 0 ? colours.background : colours.white;

export const globalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: theme.colors.secondary,
  },
  titleContainer: {
    backgroundColor: theme.colors.secondary,
  },
  contentContainer: {
    backgroundColor: theme.colors.background,
    borderTopStartRadius: 18,
    borderTopRightRadius: 18,
  },
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  form: {
    flex: 1,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: colours.text,
  },
  titleTextCentered: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: colours.text,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: colours.text,
  },
  textCentered: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: colours.text,
    textAlign: "center",
  },
  smallText: {
    fontFamily: "nunito-regular",
    fontSize: 14,
    color: colours.text,
  },
  paragraph: {
    marginVertical: 12,
    lineHeight: 20,
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: colours.white,
    borderRadius: 10,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colours.secondary,
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "#AA0808",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  authBottomButtonPanel: {
    marginTop: 50,
  },
  hrContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    width: "80%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
});
