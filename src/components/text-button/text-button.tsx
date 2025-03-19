import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import LinearGradientBG from "@/components/linear-gradient-bg";
import { TextButtonProps } from "./text-button.types";
import { styles } from "./text-button.styles";

export default memo<TextButtonProps>(function Button({
  children,
  style,
  onPress,
}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.body}>
        <View style={styles.bg}>
          <LinearGradientBG
            color1="#2f5bbc"
            color2="#7334b7"
            offset2="0.7"
            gradientTransform="rotate(45,0,0)"
          />
        </View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
});
