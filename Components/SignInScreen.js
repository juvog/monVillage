import * as React from "react";
import AuthContext from "./Authentification";
import {
  Image,
  ImageBackground,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import Colors from "../Config/Colors";

function SignInScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/sketch-manlogo.png")}
        />
        <Text style={styles.tagline}>Pour un meilleur voisinage</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppTextInput
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <AppTextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <AppButton
          style={styles.signInButton}
          title="Se connecter"
          onPress={() => signIn({ username, password })}
        />
        <AppButton
          style={styles.joinButton}
          title="Joindre la communauté"
          onPress={() => navigation.navigate("Enregistrer")}
        />
      </View>
    </ImageBackground>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  joinButton: {
    backgroundColor: "#4ecdc4",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  logo: {
    width: 100,
    height: 100,
    overflow: "visible",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  signInButton: {
    width: "100%",
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
