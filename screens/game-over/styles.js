import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  scrolllayout: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLandscape: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
  },
  result: {
    marginVertical: 10,
    padding: 20,
    width: width / 1.5,
    maxWidth: "80%",
    alignItems: "center",
  },
  resultLandscape: {
    marginVertical: 10,
    padding: 20,
    width: width / 3,
    maxWidth: "80%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
  imageLandscape: {
    width: "40%",
    height: 180,
  },
});
