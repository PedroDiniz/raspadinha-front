import { StyleSheet } from "react-native";
import { general } from "../../styles/index";

const styles = StyleSheet.create({
  ...general,
  customTitle: {
    marginTop: "30%"
  },
  iconContainer: {
    marginTop: "25%"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  bg: {
    backgroundColor: "#F1F3F5"
  }
});

export default styles;
