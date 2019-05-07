import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import colors from "../../styles/colors";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class Initial extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={[styles.container, styles.bg]}>
        <View style={styles.logoContainer}>
          <Icon name="poll-h" size={65} color={colors.primary} />
          <Text style={styles.title}>Raspadinha UNISAL</Text>
        </View>

        <Text style={styles.sectionCenter}>
          Bem vindos ao app de raspadinha da UNISAL
        </Text>

        <Text style={styles.sectionCenter}> Escolha o tipo de acesso</Text>

        <View style={[styles.rowContainerSB, styles.iconContainer]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("AlunoLogin");
            }}
          >
            <Icon name="user-graduate" size={65} color={colors.primary} />

            <Text style={styles.textCenter}>Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ProfLogin");
            }}
          >
            <Icon name="chalkboard-teacher" size={65} color={colors.primary} />

            <Text style={styles.textCenter}>Professor</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
