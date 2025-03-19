import { TextInput as RNTextInput, Text, View } from "react-native";
import React, { memo } from "react";

import LinearGradientBG from "@/components/linear-gradient-bg";
import Reanimated from "react-native-reanimated";
import { TextInputProps } from "./text-input.types";
import { styles } from "./text-input.styles";
import { useTextInputHook } from "./text-input.hooks";

export default memo<TextInputProps>(function TextInput({
  containerStyle,
  placeholder,
  icon,
  ...rest
}) {
  const {
    refBorderView,
    borderAnimatedStyle,
    widthBorderView,
    onBlur,
    onFocus,
  } = useTextInputHook();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{placeholder}</Text>
      <View style={styles.body}>
        {icon}
        <RNTextInput
          style={styles.textInput}
          {...rest}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
      <Reanimated.View ref={refBorderView} style={styles.bottomBorder}>
        <Reanimated.View
          style={[styles.bottomBorderLayout, borderAnimatedStyle]}
        >
          <LinearGradientBG
            offset2={0.5}
            gradientTransform="rotate(135,120,0)"
            width={widthBorderView}
          />
        </Reanimated.View>
      </Reanimated.View>
    </View>
  );
});
