import React, { memo } from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";

import LinearGradientBG from "@/components/login-v1/linear-gradient-bg";
import { styles } from "./text-input.styles";
import { TextInputProps } from "./text-input.types";

export default memo<TextInputProps>(function TextInput({
  containerStyle,
  icon,
  style,
  ...rest
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.body}>
        <LinearGradientBG
          style={StyleSheet.absoluteFillObject}
          gradientTransform="rotate(65,20,0) matrix(1,1,1,100,-80,0)"
          color1="#fff"
          color2="#046aaf"
        />
        {icon}
        <RNTextInput style={[styles.textInput, style]} {...rest} />
      </View>
    </View>
  );
});
