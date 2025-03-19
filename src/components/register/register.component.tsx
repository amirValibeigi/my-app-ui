import { Feather, Ionicons } from "@expo/vector-icons";
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
import LinearGradientBG from "@/components/linear-gradient-bg";
import { SafeAreaView } from "react-native-safe-area-context";
import TextButton from "../text-button";
import TextInput from "@/components/text-input";
import { memo } from "react";
import { styles } from "./register.component.styles";
import { useRegisterComponentHook } from "./register.component.hooks";

function RegisterComponent() {
  const {
    remember,
    isLoading,
    onPressRegister,
    onPressSignIn,
    toggleRemember,
  } = useRegisterComponentHook();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradientBG
        style={StyleSheet.absoluteFillObject}
        gradientTransform="rotate(160,100,0)"
        width="100%"
      />
      <ScrollView>
        <Text style={styles.title}>SIGN UP</Text>

        <View style={styles.body}>
          <View style={styles.registerLayout}>
            <View style={styles.registerBody}>
              <View style={styles.registerCard}>
                <View style={styles.registerCardFooter} />
                <View style={styles.registerInputs}>
                  <TextInput
                    containerStyle={styles.input}
                    placeholder="NAME"
                    returnKeyType="next"
                    icon={<Ionicons name="person-outline" size={20} />}
                  />
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
                      <Text>Agree to our Terms & Conditions</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

                <Button
                  style={styles.registerButton}
                  loading={isLoading}
                  onPress={onPressRegister}
                />
              </View>
            </View>
          </View>

          <View style={styles.footerLayout}>
            <View style={styles.footerBody}>
              <View style={styles.footerCard}>
                <View style={styles.footerCardFooter} />

                <Text style={styles.alreadyAccountText}>
                  Already have an Account
                </Text>

                <TextButton style={styles.signUpButton} onPress={onPressSignIn}>
                  LOGIN
                </TextButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(RegisterComponent);
