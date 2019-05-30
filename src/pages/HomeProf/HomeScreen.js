import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

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

  //   notas:
  //   1. customizar o header por props para cada tipo de usuário (Professor/aluno)
  //   2. router props para descobrir qual tipo de usuário acessa determinada rota (Professor/aluno) para redirecionar corretamente

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("NewRaspadinhaScreen");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Criar</Text>
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
    marginTop: 10
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
