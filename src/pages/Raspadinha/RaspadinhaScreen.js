import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import colors from "../../styles/colors";
import HeaderRaspadinha from "../../components/headerRaspadinha";
import Resposta from "../../components/resposta";

export default class Raspadinha extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colors.primary
    }
  });

  render() {
    return (
      <ScrollView>
        <View>
          <HeaderRaspadinha />
          <Resposta />
          <Resposta />
          <Resposta />
          <Resposta />
        </View>
      </ScrollView>
    );
  }
}
