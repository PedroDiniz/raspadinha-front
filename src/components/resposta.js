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

class Resposta extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>A</Text>
            <Text style={styles.subTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
  }
});

export default Resposta;
