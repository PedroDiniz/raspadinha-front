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

class Pin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Digite o pin aqui:"
            underlineColorAndroid="transparent"
            keyboardType={"numeric"}
            style={styles.inputStyle}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("RaspadinhaScreen");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 10
  },
  buttonContainer: {
    backgroundColor: "#92D2C4",
    paddingVertical: 15,
    marginBottom: 5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  },
  inputStyle: {
    fontSize: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  }
});

export default withNavigation(Pin);
