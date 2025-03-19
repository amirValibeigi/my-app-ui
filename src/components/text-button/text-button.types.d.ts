import { StyleProp, ViewStyle } from "react-native";

export type TextButtonProps = {
  children?: string;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
};
