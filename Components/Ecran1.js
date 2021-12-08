import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from './Authentification';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppButton from './AppButton'



function Ecran1({navigation}) {

  

  const { signOut } = React.useContext(AuthContext);

  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.png")}
      style={styles.background}

    >   
    
        <View style={styles.conteneurBoutonsRecherche}>
          <AppButton title="Proposer un service" onPress={() => navigation.navigate('Proposer')}/>
          <Text> </Text>
          <AppButton title="Chercher un service" onPress={() => navigation.navigate('Rechercher')}/>
        </View>

        <Button style={styles.boutonLogout} title="Sign out" onPress={signOut} />


    </ImageBackground>
  );
}

export default Ecran1;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  conteneurBoutonsRecherche: {
    paddingTop:30,
    width: "100%",
    flex: 2
  },

  boutonLogout: {
    width: "100%",
    height: 70,
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },


  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
