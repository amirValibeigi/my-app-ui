import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCallback, useEffect, useState } from "react";

import { CheckBoxProps } from "./check-box.types";

export function useCheckBoxHook(props: CheckBoxProps) {
  const { check: propCheck } = props;

  const [check, setCheck] = useState(propCheck);

  const checkBGOpacityShared = useSharedValue(0);

  const checkBGAnimatedStyle = useAnimatedStyle(
    function checkBGAnimatedStyleFN() {
      return { opacity: checkBGOpacityShared.value };
    },
    [check]
  );

  const animatedCheck = useCallback(function animatedCheckCB(active: boolean) {
    checkBGOpacityShared.value = withTiming(active ? 1 : 0, {
      duration: 150,
    });
  }, []);

  const toggleCheck = useCallback(
    function toggleCheckCB() {
      setCheck((pv) => {
        const tmp = !pv;

        animatedCheck(tmp);

        return tmp;
      });
    },
    [animatedCheck]
  );

  useEffect(
    function changeCheckFN() {
      animatedCheck(propCheck ?? false);
      setCheck(propCheck);
    },
    [propCheck, animatedCheck]
  );

  return { checkBGAnimatedStyle, check, toggleCheck };
}
