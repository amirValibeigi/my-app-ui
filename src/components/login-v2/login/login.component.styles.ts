import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
  },

  mountainBG: {
    position: "absolute",
    minWidth: "52%",
    height: "16%",
    bottom: 0,
  },
  mountainBGRight: {
    right: 0,
    transform: [{ rotateY: "180deg" }],
  },

  cloud: {
    position: "absolute",
    width: 200,
    height: 60,
  },
  cloud1: {
    top: "10%",
    left: "20%",
  },
  cloud2: {
    top: "50%",
    left: "-8%",
    transform: [{ scale: 1.2 }],
  },
  cloud3: {
    top: "36%",
    right: "-15%",
    transform: [{ scale: 0.8 }, { rotateY: "180deg" }],
  },
  card: {
    backgroundColor: "#fff",
    maxWidth: "90%",
    minWidth: "85%",
    minHeight: "65%",
    alignSelf: "center",
    marginVertical: "auto",
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
  },
  cloudCard: {
    position: "absolute",
    width: 100,
    height: 30,
  },
  cloud1Card: {
    top: "6%",
    left: "20%",
  },
  cloud2Card: {
    top: "17%",
    left: "8%",
    transform: [{ scale: 1.2 }],
  },
  cloud3Card: {
    right: "12%",
    top: "16%",
    transform: [{ scale: 0.8 }, { rotateY: "180deg" }],
  },
  star: {
    position: "absolute",
    width: 20,
    height: 20,
  },
  starCard: {
    position: "absolute",
    width: 20,
    height: 20,
  },
  star1Card: { top: "2%", left: "35%" },
  star2Card: { top: "8%", right: "14%" },
  star3Card: { top: "13%", left: "9%" },
  star4Card: { top: "25%", left: "6%", transform: [{ scale: 0.6 }] },
  star5Card: { top: "19%", left: "40%", transform: [{ scale: 0.6 }] },
  star6Card: { top: "25%", left: "32%" },
  headerCard: {
    position: "absolute",
    alignItems: "center",
    gap: 12,
    alignSelf: "center",
    marginTop: "32%",
  },
  dyhaTextHeaderCard: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
  },
  signupTextHeaderCard: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 4,
    fontWeight: "300",
    paddingHorizontal: 12,
  },
  welcomeTextHeaderCard: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },

  bodyCard: {
    marginTop: "80%",
    alignItems: "center",
    gap: 20,
    marginVertical: 12,
  },
  containerTextInput: {
    minWidth: "65%",
    overflow: "hidden",
    borderRadius: 20,
  },
  textInput: {
    color: "#fff",
    textAlign: "center",
  },
  iconTextInput: {
    position: "absolute",
    marginHorizontal: 8,
  },
});
