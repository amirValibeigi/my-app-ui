import React, { memo, useMemo } from "react";
import Svg, {
  Defs,
  LinearGradient,
  LinearGradientProps,
  NumberProp,
  Rect,
  Stop,
  SvgProps,
} from "react-native-svg";

type LinearGradientBGProps = {
  color1?: string;
  color2?: string;
  offset1?: NumberProp;
  offset2?: NumberProp;
  gradientTransform?: string | null;
  lg?: Omit<LinearGradientProps, "gradientTransform" | "id" | "children">;
} & SvgProps;

export default memo<LinearGradientBGProps>(function LinearGradientBG(props) {
  const {
    color1 = "#7334b7",
    color2 = "#2f5bbc",
    gradientTransform: gradientTransformProps,
    offset1 = 0,
    offset2 = 1,
    lg,
    ...rest
  } = props;

  const gradientTransform = useMemo(
    function getGradientTransformCB() {
      if (gradientTransformProps === null) {
        return;
      }
      if (gradientTransformProps === undefined) {
        return "rotate(160,20,0)";
      }

      return gradientTransformProps;
    },
    [gradientTransformProps]
  );

  return (
    <Svg {...rest}>
      <Defs>
        <LinearGradient id="P" gradientUnits="userSpaceOnUse" />
        <LinearGradient id="grad" gradientTransform={gradientTransform} {...lg}>
          <Stop offset={offset1} stopColor={color1} />
          <Stop offset={offset2} stopColor={color2} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
});
