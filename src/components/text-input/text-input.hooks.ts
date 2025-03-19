import {
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCallback, useLayoutEffect, useState } from "react";

export function useTextInputHook() {
  const refBorderView = useAnimatedRef();

  const [widthBorderView, setWidthBorderView] = useState(0);

  const borderWidthShared = useSharedValue(0);

  const borderAnimatedStyle = useAnimatedStyle(
    function borderAnimatedStyleFN() {
      return {
        width: borderWidthShared.value,
      };
    }
  );

  const onFocus = useCallback(function onFocusCB() {
    runOnUI(function () {
      const { width } = measure(refBorderView) ?? {};

      if (width) {
        borderWidthShared.value = withTiming(width);
      }
    })();
  }, []);

  const onBlur = useCallback(function onBlurCB() {
    runOnUI(function () {
      borderWidthShared.value = withTiming(0);
    })();
  }, []);

  useLayoutEffect(function getWidthFN() {
    runOnUI(function () {
      const { width } = measure(refBorderView) ?? {};

      runOnJS(setWidthBorderView)(width ?? 0);
    })();
  }, []);

  return {
    refBorderView,
    borderAnimatedStyle,
    widthBorderView,
    onBlur,
    onFocus,
  };
}
