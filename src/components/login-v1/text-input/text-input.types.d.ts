import { ReactElement } from "react";
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export type TextInputProps = Omit<RNTextInputProps, "onFocus"> & {
  icon?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
};
