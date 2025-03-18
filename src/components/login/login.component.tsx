import { memo, useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import CheckBox from "@/components/check-box";
import LinearGradientBG from "@/components/linear-gradient-bg";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./login.component.styles";

function LoginComponent() {
  const { navigate } = useNavigation();

  const onPressLogin = useCallback(function onPressLoginCB() {
    console.log("here");
  }, []);

  const onPressSignUp = useCallback(
    function onPressSignUpCB() {
      navigate("(auth)", { screen: "register" });
    },
    [navigate]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradientBG
        style={StyleSheet.absoluteFillObject}
        gradientTransform="rotate(160,100,0)"
        width="100%"
      />

      <Text style={styles.title}>Login</Text>

      <View style={styles.body}>
        <View style={styles.loginLayout}>
          <View style={styles.loginBody}>
            <View style={styles.loginCard}>
              <View style={styles.loginCardFooter} />
              <View style={styles.loginInputs}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <CheckBox />
              </View>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={onPressLogin}
              >
                <View style={styles.loginButtonLayout}>
                  <View style={styles.loginButtonBG}>
                    <LinearGradientBG />
                  </View>

                  <AntDesign
                    style={styles.loginButtonIcon}
                    name="arrowright"
                    color="#fff"
                    size={24}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footerLayout}>
          <View style={styles.footerBody}>
            <View style={styles.footerCard}>
              <View style={styles.footerCardFooter} />

              <Text style={styles.alreadyAccountText}>
                Don't have an Account
              </Text>

              <TouchableOpacity
                style={styles.signUpButton}
                onPress={onPressSignUp}
              >
                <View style={styles.signUpButtonLayout}>
                  <View style={styles.signUpButtonBG}>
                    <LinearGradientBG
                      color1="#2f5bbc"
                      color2="#7334b7"
                      offset2="0.7"
                      gradientTransform="rotate(45,0,0)"
                    />
                  </View>
                  <Text style={styles.signUpButtonText}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default memo(LoginComponent);
