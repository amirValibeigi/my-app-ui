import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    borderRadius: 22.5,
    overflow: "hidden",
  },
  body: {
    flex: 1,
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
