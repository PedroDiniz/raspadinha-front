import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../styles/colors";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";

import LoginForm from "../../components/loginForm";

export default class ProfLogin extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colors.primary
    }
  });

  render() {
    return (
      <View style={[styles.container, styles.bg]}>
        <View style={styles.logoContainer}>
          <Icon name="poll-h" size={65} color={colors.primary} />
          <Text style={styles.title}>Raspadinha UNISAL</Text>
        </View>
        <View>
          <LoginForm />
        </View>
      </View>
    );
  }
}
