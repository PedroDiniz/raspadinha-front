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

class CardRaspadinha extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("RaspadinhaScreen");
          }}
        >
          <View style={styles.header}>
            <Text style={styles.title}>
              #Raspadinha sobre inteligencia artificial
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  subTitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5
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

export default withNavigation(CardRaspadinha);
