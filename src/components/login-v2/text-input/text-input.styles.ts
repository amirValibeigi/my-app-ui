import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    minHeight: 20,
    flexShrink: 0,
  },
  textInput: { flex: 1, flexGrow: 1, flexShrink: 0, marginVertical: 8 },
  body: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
