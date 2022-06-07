import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: "#212121",
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
