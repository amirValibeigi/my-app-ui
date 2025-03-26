import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import LinearGradientBG from "@/components/login-v1/linear-gradient-bg";
import { styles } from "./text-button.styles";
import { TextButtonProps } from "./text-button.types";

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
            gradientTransform="rotate(70,50,0) matrix(1,1,1,100,-10,0)"
            color1="#fff"
            color2="#046aaf"
          />
        </View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
});
