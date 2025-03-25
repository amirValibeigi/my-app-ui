import { useEffect, useState } from "react";

import Star from "@/assets/images/svg/star.svg";
import { View } from "react-native";
import { styles } from "./login.component.styles";

function useStarUI() {
  const [stars, setStars] = useState<React.JSX.Element[]>([]);

  useEffect(function createStarsFN() {
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

  return { stars };
}

export function useLoginComponentHook() {
  const hookStarUI = useStarUI();

  return { ...hookStarUI };
}

function randomInt(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
