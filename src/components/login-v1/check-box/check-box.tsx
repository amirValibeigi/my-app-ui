import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import LinearGradientBG from "@/components/login-v1/linear-gradient-bg";
import { AntDesign } from "@expo/vector-icons";
import Reanimated from "react-native-reanimated";
import { useCheckBoxHook } from "./check-box.hooks";
import { styles } from "./check-box.styles";
import { CheckBoxProps } from "./check-box.types";

export default memo<CheckBoxProps>(function CheckBox(props) {
  const { checkBGAnimatedStyle, toggleCheck } = useCheckBoxHook(props);

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheck}>
      <View style={styles.body}>
        <Reanimated.View
          style={[
            StyleSheet.absoluteFillObject,
            { overflow: "hidden" },
            checkBGAnimatedStyle,
          ]}
        >
          <LinearGradientBG
            style={StyleSheet.absoluteFillObject}
            gradientTransform="rotate(140,4,0)"
          />
          <AntDesign
            style={styles.checkIcon}
            name="check"
            color="#fff"
            size={18}
          />
        </Reanimated.View>
      </View>
    </TouchableOpacity>
  );
});
