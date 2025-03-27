import { Feather, Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import BG from "@/assets/images/svg/bg.svg";
import BGMountain from "@/assets/images/svg/bg_mountain.svg";
import Cloud1 from "@/assets/images/svg/cloud_1.svg";
import Cloud2 from "@/assets/images/svg/cloud_2.svg";
import Mountain from "@/assets/images/svg/mountain.svg";
import Star from "@/assets/images/svg/star.svg";
import Reanimated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import TextButton from "../text-button";
import TextInput from "../text-input";
import { useLoginComponentHook } from "./login.component.hooks";
import { styles } from "./login.component.styles";

export default memo(function LoginComponent() {
  const {
    cardAnimatedStyle,
    cloud1AnimatedStyle,
    cloud2AnimatedStyle,
    cloud3AnimatedStyle,
    star1AnimatedStyle,
    star2AnimatedStyle,
    star3AnimatedStyle,
    stars,
  } = useLoginComponentHook();

  return (
    <SafeAreaView style={styles.container}>
      <BG style={StyleSheet.absoluteFillObject} />
      <View style={styles.mountainBG}>
        <BGMountain width="100%" preserveAspectRatio="xMidYMax" />
      </View>
      <View style={[styles.mountainBG, styles.mountainBGRight]}>
        <BGMountain width="100%" preserveAspectRatio="xMidYMax" />
      </View>

      {stars}

      <Reanimated.View
        style={[styles.cloud, styles.cloud1, cloud1AnimatedStyle]}
      >
        <Cloud1 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </Reanimated.View>
      <Reanimated.View
        style={[styles.cloud, styles.cloud2, cloud2AnimatedStyle]}
      >
        <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </Reanimated.View>
      <Reanimated.View
        style={[styles.cloud, styles.cloud3, cloud3AnimatedStyle]}
      >
        <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </Reanimated.View>

      <Reanimated.View style={[styles.card, cardAnimatedStyle]}>
        <View style={StyleSheet.absoluteFillObject}>
          <Mountain width="100%" height="100%" preserveAspectRatio="xMinYMin" />
        </View>

        <Reanimated.View
          style={[styles.starCard, styles.star1Card, star1AnimatedStyle]}
        >
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>
        <View style={[styles.starCard, styles.star2Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <Reanimated.View
          style={[styles.starCard, styles.star3Card, star2AnimatedStyle]}
        >
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>
        <View style={[styles.starCard, styles.star4Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <Reanimated.View
          style={[styles.starCard, styles.star5Card, star3AnimatedStyle]}
        >
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>
        <View style={[styles.starCard, styles.star6Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>

        <Reanimated.View
          style={[styles.cloudCard, styles.cloud1Card, cloud1AnimatedStyle]}
        >
          <Cloud1 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>
        <Reanimated.View
          style={[styles.cloudCard, styles.cloud2Card, cloud2AnimatedStyle]}
        >
          <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>
        <Reanimated.View
          style={[styles.cloudCard, styles.cloud3Card, cloud3AnimatedStyle]}
        >
          <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </Reanimated.View>

        <View style={styles.headerCard}>
          <Text style={styles.dyhaTextHeaderCard}>Don't you have account?</Text>
          <Text style={styles.signupTextHeaderCard}>sign up</Text>
          <Text style={styles.welcomeTextHeaderCard}>WELCOME</Text>
        </View>

        <View style={styles.bodyCard}>
          <TextInput
            style={styles.textInput}
            containerStyle={styles.containerTextInput}
            placeholder="Username"
            placeholderTextColor="#fff"
            icon={
              <Ionicons
                style={styles.iconTextInput}
                name="person-outline"
                size={16}
                color="#fff"
              />
            }
          />
          <TextInput
            style={styles.textInput}
            containerStyle={styles.containerTextInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            icon={
              <Feather
                style={styles.iconTextInput}
                name="lock"
                size={16}
                color="#fff"
              />
            }
          />
          <TextButton>Login</TextButton>
          <Text>Forget your password?</Text>
        </View>
      </Reanimated.View>
    </SafeAreaView>
  );
});
