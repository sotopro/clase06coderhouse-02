import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    marginVertical: theme.margin.medium,
    color: theme.colors.textColor,
  },
});
