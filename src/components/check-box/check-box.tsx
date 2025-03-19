import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { CheckBoxProps } from "./check-box.types";
import LinearGradientBG from "@/components/linear-gradient-bg";
import Reanimated from "react-native-reanimated";
import { styles } from "./check-box.styles";
import { useCheckBoxHook } from "./check-box.hooks";

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
