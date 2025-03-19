import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";

import { AntDesign } from "@expo/vector-icons";
import { ButtonProps } from "./button.types";
import LinearGradientBG from "../linear-gradient-bg";
import { styles } from "./button.styles";

export default memo<ButtonProps>(function Button({ loading, style, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={loading}
      onPress={onPress}
    >
      <View style={styles.layout}>
        <View style={styles.BG}>
          <LinearGradientBG />
        </View>

        {loading ? (
          <ActivityIndicator style={styles.loading} color="#fff" size={26} />
        ) : (
          <AntDesign
            style={styles.icon}
            name="arrowright"
            color="#fff"
            size={24}
          />
        )}
      </View>
    </TouchableOpacity>
  );
});
