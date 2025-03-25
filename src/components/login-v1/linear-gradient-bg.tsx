import React, { memo } from "react";
import Svg, {
  Defs,
  LinearGradient,
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
  gradientTransform?: string;
} & SvgProps;

export default memo<LinearGradientBGProps>(function LinearGradientBG({
  color1 = "#7334b7",
  color2 = "#2f5bbc",
  gradientTransform = "rotate(160,20,0)",
  offset1 = 0,
  offset2 = 1,
  ...rest
}) {
  return (
    <Svg {...rest}>
      <Defs>
        <LinearGradient id="grad" gradientTransform={gradientTransform}>
          <Stop offset={offset1} stopColor={color1} />
          <Stop offset={offset2} stopColor={color2} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
});
