import React, { memo } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import BG from "@/assets/images/svg/bg.svg";
import BGMountain from "@/assets/images/svg/bg_mountain.svg";
import Cloud1 from "@/assets/images/svg/cloud_1.svg";
import Cloud2 from "@/assets/images/svg/cloud_2.svg";
import Mountain from "@/assets/images/svg/mountain.svg";
import Star from "@/assets/images/svg/star.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginComponentHook } from "./login.component.hooks";
import { styles } from "./login.component.styles";

export default memo(function LoginComponent() {
  const { stars } = useLoginComponentHook();
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

      <View style={[styles.cloud, styles.cloud1]}>
        <Cloud1 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </View>
      <View style={[styles.cloud, styles.cloud2]}>
        <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </View>
      <View style={[styles.cloud, styles.cloud3]}>
        <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
      </View>

      <View style={styles.card}>
        <View style={StyleSheet.absoluteFillObject}>
          <Mountain width="100%" height="100%" preserveAspectRatio="xMinYMin" />
        </View>

        <View style={[styles.starCard, styles.star1Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.starCard, styles.star2Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.starCard, styles.star3Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.starCard, styles.star4Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.starCard, styles.star5Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.starCard, styles.star6Card]}>
          <Star width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>

        <View style={[styles.cloudCard, styles.cloud1Card]}>
          <Cloud1 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.cloudCard, styles.cloud2Card]}>
          <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <View style={[styles.cloudCard, styles.cloud3Card]}>
          <Cloud2 width="100%" height="100%" preserveAspectRatio="xMaxYMax" />
        </View>
        <TextInput />
      </View>
    </SafeAreaView>
  );
});
