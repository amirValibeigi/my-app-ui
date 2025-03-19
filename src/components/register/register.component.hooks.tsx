import { useCallback, useState } from "react";

import { useNavigation } from "expo-router";

export function useRegisterComponentHook() {
  const { navigate } = useNavigation();

  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPressRegister = useCallback(
    function onPressRegisterCB() {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          navigate("(auth)", { screen: "login" });
        }, 1);
      }, 2000);
    },
    [navigate]
  );

  const onPressSignIn = useCallback(
    function onPressSignInCB() {
      navigate("(auth)", { screen: "login" });
    },
    [navigate]
  );

  const toggleRemember = useCallback(function toggleRememberCB() {
    setRemember((pv) => !pv);
  }, []);

  return {
    remember,
    isLoading,
    onPressRegister,
    onPressSignIn,
    toggleRemember,
  };
}
