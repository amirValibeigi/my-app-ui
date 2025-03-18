import React, { memo, useCallback, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import LinearGradientBG from "@/components/linear-gradient-bg";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./check-box.styles";

export default memo(function CheckBox() {
  const [check, setCheck] = useState(false);

  const toggleCheck = useCallback(function toggleCheckCB() {
    setCheck((pv) => !pv);
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheck}>
      <View style={styles.body}>
        {check && (
          <>
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
          </>
        )}
      </View>
    </TouchableOpacity>
  );
});
