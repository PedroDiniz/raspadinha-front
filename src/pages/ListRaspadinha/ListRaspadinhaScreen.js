import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import HomeHeaderTitle from "../../components/homeHeaderTitle";

import style from "../../styles/general";

import colors from "../../styles/colors";

import CardRaspadinha from "../../components/cardRaspadinha";

export default class ListRaspadinha extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitle: <HomeHeaderTitle navigation={navigation} />
  });

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Text style={styles.title}>Minhas Raspadinhas</Text>
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
          <CardRaspadinha />
        </View>
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
