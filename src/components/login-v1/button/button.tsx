import React, { memo } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

import LinearGradientBG from "@/components/login-v1/linear-gradient-bg";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./button.styles";
import { ButtonProps } from "./button.types";

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
