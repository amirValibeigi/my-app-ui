import React, { memo, useCallback } from "react";

import { useNavigation } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default memo(function IndexPage() {
  const { navigate } = useNavigation();

  const onPressLogin = useCallback(
    function onPressLoginCB() {
      navigate("(auth)", { screen: "login" });
    },
    [navigate]
  );

  const onPressRegister = useCallback(
    function onPressRegisterCB() {
      navigate("(auth)", { screen: "register" });
    },
    [navigate]
  );

  return (
    <SafeAreaView>
      <Button title="register" onPress={onPressRegister} />
      <Button title="login" onPress={onPressLogin} />
    </SafeAreaView>
  );
});
