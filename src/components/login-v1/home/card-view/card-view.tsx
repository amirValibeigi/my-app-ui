import React, { memo } from "react";
import { Text, View } from "react-native";

import { styles } from "./card-view.styles";
import { CardViewProps } from "./card-view.types";

export default memo<CardViewProps>(function CardView({
  title,
  style,
  children,
}) {
  return (
    <View style={[styles.container, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
});
