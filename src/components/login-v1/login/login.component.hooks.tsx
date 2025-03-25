import { useCallback, useState } from "react";

import { useNavigation } from "expo-router";

export function useLoginComponentHook() {
  const { navigate } = useNavigation();

  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPressLogin = useCallback(function onPressLoginCB() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

  return { isLoading, remember, onPressLogin, onPressSignUp, toggleRemember };
}
