import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", "Login button pressed");
  };

  const handleCreateAccount = () => {
    Alert.alert("Create Account", "Create Account button pressed");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Forgot Password button pressed");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ECECEC" />

      <View style={styles.card}>

        {/* Facebook Logo */}
        <Text style={styles.logo}>facebook</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Mobile number or email address"
          placeholderTextColor="#BCC0C4"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#BCC0C4"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Forgotten Password */}

        <TouchableOpacity style={styles.forgotContainer} onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgotten password?</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={handleCreateAccount}
        >
          <Text style={styles.createAccountButtonText}>Create new account</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerLink}>About</Text>
          <Text style={styles.footerLink}>Help</Text>
          <Text style={styles.footerLink}>More</Text>
        </View>

        <Text style={styles.metaText}>Meta © 2022</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "88%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  logo: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#1877F2",
    marginBottom: 28,
    letterSpacing: -1,
  },

  input: {
    width: "100%",
    height: 46,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDFE2",
    paddingHorizontal: 14,
    marginBottom: 10,
    fontSize: 15,
    color: "#1C1E21",
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#1877F2",
    paddingVertical: 13,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 4,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  forgotContainer: {
    marginTop: 12,
    marginBottom: 4,
  },

  forgotPassword: {
    color: "#1877F2",
    fontSize: 14,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DADDE1",
  },

  orText: {
    marginHorizontal: 12,
    color: "#606770",
    fontSize: 14,
  },

  createAccountButton: {
    backgroundColor: "#42B72A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
  },

  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 8,
  },

  footerLink: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#606770",
  },

  metaText: {
    fontSize: 12,
    color: "#606770",
  },
});