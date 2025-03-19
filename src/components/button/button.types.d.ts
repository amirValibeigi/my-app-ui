import { StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  onPress?(): void;
};
