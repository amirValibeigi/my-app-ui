import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import Star from "@/assets/images/svg/star.svg";
import { styles } from "./login.component.styles";

const { height } = Dimensions.get("window");

function useStarUI() {
  const [stars, setStars] = useState<React.JSX.Element[]>([]);

  const star1OpacitySharedValue = useSharedValue(1);
  const star2OpacitySharedValue = useSharedValue(1);
  const star3OpacitySharedValue = useSharedValue(1);

  const star1AnimatedStyle = useAnimatedStyle(function star1AnimatedStyleCB() {
    return { opacity: star1OpacitySharedValue.value };
  });

  const star2AnimatedStyle = useAnimatedStyle(function star2AnimatedStyleCB() {
    return { opacity: star2OpacitySharedValue.value };
  });

  const star3AnimatedStyle = useAnimatedStyle(function star3AnimatedStyleCB() {
    return { opacity: star3OpacitySharedValue.value };
  });

  const loadStars = useCallback(async function loadStarCB() {
    requestAnimationFrame(function requestAnimationFrameCB() {
      const tmpStars = Array(randomInt(35, 50))
        .fill(0)
        .map(function mapToStarFN(_, idx) {
          return (
            <View
              key={`star_${idx}`}
              style={[
                styles.star,
                {
                  top: `${randomInt(0, 80)}%`,
                  left: `${
                    randomInt(0, 100) % 2 === 0
                      ? randomInt(0, 25)
                      : randomInt(75, 99)
                  }%`,
                  transform: [{ scale: Math.random() }],
                },
              ]}
            >
              <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
            </View>
          );
        });

      setStars(tmpStars);
    });
  }, []);

  useLayoutEffect(function animationsFN() {
    star1OpacitySharedValue.value = withRepeat(
      withDelay(
        1000,
        withSequence(
          withTiming(0.8, { duration: 200 }),
          withDelay(10, withTiming(1, { duration: 300 }))
        )
      ),
      -1
    );
    star2OpacitySharedValue.value = withRepeat(
      withDelay(
        100,
        withSequence(
          withTiming(0.8, { duration: 200 }),
          withDelay(10, withTiming(1, { duration: 300 }))
        )
      ),
      -1
    );
    star3OpacitySharedValue.value = withRepeat(
      withDelay(
        2000,
        withSequence(
          withTiming(0.8, { duration: 200 }),
          withDelay(10, withTiming(1, { duration: 300 }))
        )
      ),
      -1
    );
  });

  return {
    star1AnimatedStyle,
    star2AnimatedStyle,
    star3AnimatedStyle,
    stars,
    loadStars,
  };
}

function useCloudUI() {
  const cloud1TransactionSharedValue = useSharedValue(1);
  const cloud2TransactionSharedValue = useSharedValue(1);
  const cloud3TransactionSharedValue = useSharedValue(1);

  const cloud1AnimatedStyle = useAnimatedStyle(
    function cloud1AnimatedStyleCB() {
      return {
        transform: [
          {
            translateX: `${interpolate(
              cloud1TransactionSharedValue.value,
              [0, 1],
              [-170, 270]
            )}%`,
          },
        ],
      };
    }
  );

  const cloud2AnimatedStyle = useAnimatedStyle(
    function cloud2AnimatedStyleCB() {
      return {
        transform: [
          {
            translateX: `${interpolate(
              cloud2TransactionSharedValue.value,
              [0, 1],
              [-180, 300]
            )}%`,
          },
        ],
      };
    }
  );

  const cloud3AnimatedStyle = useAnimatedStyle(
    function cloud3AnimatedStyleCB() {
      return {
        transform: [
          {
            translateX: `${interpolate(
              cloud3TransactionSharedValue.value,
              [0, 1],
              [-350, 330]
            )}%`,
          },
        ],
      };
    }
  );

  useLayoutEffect(function animationsFN() {
    cloud1TransactionSharedValue.value = 0.32;
    cloud2TransactionSharedValue.value = 0.38;
    cloud3TransactionSharedValue.value = 0.5;

    cloud1TransactionSharedValue.value = withTiming(
      0,
      { duration: 18000 },
      () => {
        cloud1TransactionSharedValue.value = 1;
        cloud1TransactionSharedValue.value = withRepeat(
          withDelay(
            1000,
            withSequence(
              withTiming(0, { duration: 100000 }),
              withTiming(1, { duration: 1 })
            )
          ),
          -1,
          true
        );
      }
    );

    cloud2TransactionSharedValue.value = withTiming(
      0,
      { duration: 18000 },
      () => {
        cloud2TransactionSharedValue.value = 1;
        cloud2TransactionSharedValue.value = withRepeat(
          withDelay(
            1000,
            withSequence(
              withTiming(0, { duration: 100000 }),
              withTiming(1, { duration: 1 })
            )
          ),
          -1,
          true
        );
      }
    );

    cloud3TransactionSharedValue.value = withTiming(
      0,
      { duration: 38000 },
      () => {
        cloud3TransactionSharedValue.value = 1;
        cloud3TransactionSharedValue.value = withRepeat(
          withDelay(
            1000,
            withSequence(
              withTiming(0, { duration: 130000 }),
              withTiming(1, { duration: 1 })
            )
          ),
          -1,
          true
        );
      }
    );
  }, []);

  return {
    cloud1AnimatedStyle,
    cloud2AnimatedStyle,
    cloud3AnimatedStyle,
  };
}

function useUI() {
  const hookCloudUI = useCloudUI();
  const { loadStars, ...hookStarUI } = useStarUI();

  const cardTransformShared = useSharedValue(0);

  const cardAnimatedStyle = useAnimatedStyle(function cardAnimatedStyleCB() {
    return {
      transform: [
        {
          translateY: interpolate(
            cardTransformShared.value,
            [0, 1],
            [height, 0]
          ),
        },
      ],
    };
  });

  useEffect(function animationsFN() {
    cardTransformShared.value = withTiming(1, { duration: 1000 }, () => {
      runOnJS(loadStars)();
    });
  }, []);

  return { ...hookCloudUI, ...hookStarUI, cardAnimatedStyle };
}

export function useLoginComponentHook() {
  const hookUI = useUI();

  return { ...hookUI };
}

function randomInt(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
