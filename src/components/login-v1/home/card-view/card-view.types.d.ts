import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CardViewProps = {
  title?: string;
  children?: ReactElement | ReactElement[];
  style?: StyleProp<ViewStyle>;
};
