import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import style from "../../styles/general";

import colors from "../../styles/colors";

export default class NewRaspadinha extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colors.primary
    }
  });

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Text style={styles.title}>Nova Raspadinha</Text>
          <TextInput
            placeholder="Título da raspadinha"
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Pergunta da raspadinha"
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={12}
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Alternativa A"
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Alternativa B"
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Alternativa C"
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Alternativa D"
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
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
