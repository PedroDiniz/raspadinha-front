import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

import colors from "../../styles/colors";
import HomeHeaderTitle from "../../components/homeHeaderTitle";

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
        <Text>HomeSCREEN</Text>
      </View>
    );
  }
}
