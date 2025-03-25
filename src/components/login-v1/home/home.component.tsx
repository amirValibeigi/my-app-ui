import React, { memo } from "react";

import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardView from "./card-view";
import { useHomeComponentHook } from "./home.component.hooks";
import { styles } from "./home.component.styles";

export default memo(function HomeComponent() {
  const { onPressLoginV1, onPressRegisterV1, onPressLoginV2 } =
    useHomeComponentHook();

  return (
    <SafeAreaView style={styles.container}>
      <CardView style={styles.card} title="v1">
        <Button title="register" onPress={onPressRegisterV1} />
        <Button title="login" onPress={onPressLoginV1} />
      </CardView>

      <CardView style={styles.card} title="v2">
        <Button title="login" onPress={onPressLoginV2} />
      </CardView>
    </SafeAreaView>
  );
});
