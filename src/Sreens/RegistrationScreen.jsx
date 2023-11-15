import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SharedLayout from "../components/SharedLayout";

const RegistrationScreen = ({ navigation }) => {
  const [isFocusInpuLogint, setIsFocusInputLogin] = useState(false);
  const [isFocusInputEmail, setIsFocusInputEmail] = useState(false);
  const [isFocusInputPassword, setIsFocusInputPassword] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [loginValue, setlogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SharedLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-187}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <View style={styles.boxAuth}>
              <Text style={styles.registerText}>Реєстрація</Text>

              <View style={styles.boxInput}>
                <TextInput
                  onFocus={() => {
                    setIsFocusInputLogin(true);
                  }}
                  onBlur={() => {
                    setIsFocusInputLogin(false);
                  }}
                  autoCapitalize="none"
                  value={loginValue}
                  onChangeText={(el) => {
                    setlogin(el);
                  }}
                  placeholder="Логін"
                  style={[
                    styles.commonInput,
                    isFocusInpuLogint && styles.isFocus,
                  ]}
                ></TextInput>
                <TextInput
                  onFocus={() => {
                    setIsFocusInputEmail(true);
                  }}
                  onBlur={() => {
                    setIsFocusInputEmail(false);
                  }}
                  autoComplete="email"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(el) => {
                    setEmail(el.trim());
                  }}
                  placeholder="Адреса електронної пошти"
                  style={[
                    styles.commonInput,
                    isFocusInputEmail && styles.isFocus,
                  ]}
                ></TextInput>
                <View style={styles.wrapperPasswordInput}>
                  <TextInput
                    onFocus={() => {
                      setIsFocusInputPassword(true);
                    }}
                    onBlur={() => {
                      setIsFocusInputPassword(false);
                    }}
                    secureTextEntry={isShowPassword}
                    autoComplete="password"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={(el) => {
                      setPassword(el.trim());
                    }}
                    placeholder="Пароль"
                    style={[
                      styles.commonInput,
                      isFocusInputPassword && styles.isFocus,
                    ]}
                  ></TextInput>
                  <TouchableOpacity
                    onPress={() => setIsShowPassword((prev) => !prev)}
                  >
                    <Text style={styles.btnShowPasswordText}>
                      {isShowPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.btnRegister} onPress={onRegister}>
                <Text style={styles.btnRegisterText}>Зареєстуватися</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <Text style={styles.signInText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SharedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  boxAuth: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 34,
  },
  commonInput: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
  },
  boxInput: {
    rowGap: 16,
    marginBottom: 43,
  },
  btnRegister: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    paddingVertical: 16,
  },
  btnRegisterText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#FFFFFF",
    marginRight: "auto",
    marginLeft: "auto",
  },
  registerText: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    marginRight: "auto",
    marginLeft: "auto",
    marginVertical: 32,
  },
  btnShowPasswordText: {
    color: "#1B4371",
    position: "absolute",
    bottom: 15,
    right: 16,
  },
  wrapperPasswordInput: {
    position: "relative",
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  signInBtn: {
    marginBottom: 45,
  },
  signInText: {
    fontFamily: "Roboto-Regular",
    lineHeight: 18.75,
    color: "#1B4371",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default RegistrationScreen;
