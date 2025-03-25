import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "@/components/login-v1/button";
import CheckBox from "@/components/login-v1/check-box";
import LinearGradientBG from "@/components/login-v1/linear-gradient-bg";
import TextInput from "@/components/login-v1/text-input";
import { Feather } from "@expo/vector-icons";
import { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextButton from "../text-button";
import { useLoginComponentHook } from "./login.component.hooks";
import { styles } from "./login.component.styles";

function LoginComponent() {
  const { remember, isLoading, onPressLogin, onPressSignUp, toggleRemember } =
    useLoginComponentHook();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradientBG
        style={StyleSheet.absoluteFillObject}
        gradientTransform="rotate(160,100,0)"
        width="100%"
      />
      <ScrollView>
        <Text style={styles.title}>Login</Text>

        <View style={styles.body}>
          <View style={styles.loginLayout}>
            <View style={styles.loginBody}>
              <View style={styles.loginCard}>
                <View style={styles.loginCardFooter} />
                <View style={styles.loginInputs}>
                  <TextInput
                    containerStyle={styles.input}
                    placeholder="EMAIL/MOBILE"
                    returnKeyType="next"
                    icon={<Feather name="mail" size={20} />}
                  />
                  <TextInput
                    containerStyle={styles.input}
                    placeholder="PASSWORD"
                    secureTextEntry
                    icon={<Feather name="lock" size={20} />}
                  />

                  <TouchableWithoutFeedback onPress={toggleRemember}>
                    <View style={styles.rememberBody}>
                      <CheckBox check={remember} />
                      <Text>REMEMBER ME</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

                <Button
                  style={styles.loginButton}
                  loading={isLoading}
                  onPress={onPressLogin}
                />
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

                <TextButton style={styles.signUpButton} onPress={onPressSignUp}>
                  SIGN UP
                </TextButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(LoginComponent);
