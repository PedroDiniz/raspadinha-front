import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

import colors from "../../styles/colors";
import HomeHeaderTitle from "../../components/homeHeaderTitle";
import Pin from "../../components/pin";
import Header from "../../components/header";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitle: <HomeHeaderTitle navigation={navigation} />
  });

  render() {
    return (
      <View>
        <Header />
        <Pin />
      </View>
    );
  }
}
