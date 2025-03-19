import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "@/components/button";
import CheckBox from "@/components/check-box";
import { Feather } from "@expo/vector-icons";
import LinearGradientBG from "@/components/linear-gradient-bg";
import { SafeAreaView } from "react-native-safe-area-context";
import TextButton from "../text-button";
import TextInput from "@/components/text-input";
import { memo } from "react";
import { styles } from "./login.component.styles";
import { useLoginComponentHook } from "./login.component.hooks";

function LoginComponent() {
  const { remember, onPressLogin, onPressSignUp, toggleRemember } =
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

                <Button style={styles.loginButton} onPress={onPressLogin} />
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
