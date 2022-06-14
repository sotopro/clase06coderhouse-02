import { StyleSheet, Dimensions } from "react-native";
import theme from "../../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  containerGeneric: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: theme.colors.textColor,
    fontSize: theme.fontSize.large,
  },
  subtitle: {
    fontSize: 16,
  },
  inputContainer: {
    width: "80%",
    maxWidth: "90%",
    minWidth: width * 0.7,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: width / 1.6,
    justifyContent: "space-between",
    paddingVertical: width > 600 ? 20 : 10,
  },
  input: {
    width: 40,
    textAlign: "center",
    fontSize: theme.fontSize.xLarge,
    height: 60,
  },
});
