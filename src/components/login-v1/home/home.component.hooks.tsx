import { useCallback } from "react";

import { useNavigation } from "expo-router";

export function useHomeComponentHook() {
  const { navigate } = useNavigation();

  const onPressLoginV1 = useCallback(
    function onPressLoginV1CB() {
      navigate("(auth)/v1", { screen: "login" });
    },
    [navigate]
  );

  const onPressRegisterV1 = useCallback(
    function onPressRegisterV1CB() {
      navigate("(auth)/v1", { screen: "register" });
    },
    [navigate]
  );

  const onPressLoginV2 = useCallback(
    function onPressLoginV2CB() {
      navigate("(auth)/v2", { screen: "login" });
    },
    [navigate]
  );

  return { onPressLoginV1, onPressRegisterV1, onPressLoginV2 };
}
