import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

import { withNavigation } from "react-navigation";

import colors from "../styles/colors";

class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={colors.primary}
          returnKeyType="next"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor={colors.primary}
          secureTextEntry
          returnKeyType="go"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 15,
    color: "green",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: colors.background,
    fontWeight: "700"
  }
});

export default withNavigation(LoginForm);
