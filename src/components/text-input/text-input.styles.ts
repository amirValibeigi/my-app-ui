import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    minHeight: 30,
    flexShrink: 0,
  },
  bottomBorder: {
    width: "100%",
    height: 2,
    backgroundColor: "#eaeaea",
    overflow: "hidden",
  },
  bottomBorderLayout: { overflow: "hidden" },
  textInput: { flex: 1, flexGrow: 1, flexShrink: 0, marginVertical: 8 },
  body: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
