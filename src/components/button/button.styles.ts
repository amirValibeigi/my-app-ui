import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    width: 60,
    aspectRatio: 1,
    borderRadius: "100%",
    overflow: "hidden",
  },
  layout: {
    width: "100%",
    height: "100%",
  },
  BG: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  icon: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  loading: {
    flex: 1,
  },
});
