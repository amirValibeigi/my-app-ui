import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    borderRadius: 22.5,
    overflow: "hidden",
  },
  body: {
    minHeight: 30,
    minWidth: 100,
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
