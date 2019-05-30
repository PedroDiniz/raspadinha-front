//Arquivo de rotas.

//Imports

import React from "react";

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from "react-navigation";

// View/Image
import { View, Image } from "react-native";

//scrollView
import { ScrollView } from "react-native-gesture-handler";

//import de pages
import Initial from "./pages/Initial/InitialScreen";
import ProfLogin from "./pages/Login/ProfLoginScreen";
import AlunoLogin from "./pages/Login/AlunoLoginScreen";
import Home from "./pages/Home/HomeScreen";
import HomeProf from "./pages/HomeProf/HomeScreen";
import RaspadinhaScreen from "./pages/Raspadinha/RaspadinhaScreen";
import NewRaspadinhaScreen from "./pages/NewRaspadinha/NewRaspadinhaScreen";
import ListRaspadinhaScreen from "./pages/ListRaspadinha/ListRaspadinhaScreen";

// style import
import colors from "./styles/colors";

// Drawer customizado
const CustomDrawer = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./assets/img/emptyProfile.png")}
        style={{
          height: 120,
          width: 120,
          borderRadius: 60,
          borderWidth: 2,
          borderColor: colors.primary
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

//Primeira tela do APP
const FirstScreen = createStackNavigator(
  {
    Initial,
    ProfLogin,
    AlunoLogin,
    RaspadinhaScreen,
    NewRaspadinhaScreen
  },
  {
    navigationOptions: {
      drawerLabel: " Sair "
    }
  }
);

//Segunda Tela do app
const HomeScreen = createStackNavigator(
  {
    Home
  },
  {
    navigationOptions: {
      drawerLabel: " Home "
    }
  }
);

const HomeProfScreen = createStackNavigator(
  {
    HomeProf
  },
  {
    navigationOptions: {
      drawerLabel: " Home "
    }
  }
);

const MinhasRaspadinhas = createStackNavigator(
  {
    ListRaspadinhaScreen
  },
  {
    navigationOptions: {
      drawerLabel: " Minhas Raspadinhas "
    }
  }
);

//formação do drawer
const MyDrawerNavigator = createDrawerNavigator(
  {
    FirstScreen,
    HomeScreen,
    HomeProfScreen,
    MinhasRaspadinhas
  },
  {
    initialRouteName: "FirstScreen",
    contentComponent: CustomDrawer
  },
  {
    drawerBackgroundColor: "#35B729",
    drawerWidth: 250
  }
);

const Routes = createAppContainer(MyDrawerNavigator);

export default Routes;
