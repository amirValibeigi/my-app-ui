import { useCallback, useState } from "react";

import { useNavigation } from "expo-router";

export function useLoginComponentHook() {
  const { navigate } = useNavigation();

  const [remember, setRemember] = useState(false);

  const onPressLogin = useCallback(function onPressLoginCB() {
    console.log("here");
  }, []);

  const onPressSignUp = useCallback(
    function onPressSignUpCB() {
      navigate("(auth)", { screen: "register" });
    },
    [navigate]
  );

  const toggleRemember = useCallback(function toggleRememberCB() {
    setRemember((pv) => !pv);
  }, []);

  return { remember, onPressLogin, onPressSignUp, toggleRemember };
}
