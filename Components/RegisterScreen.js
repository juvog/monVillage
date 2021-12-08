import React from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "./Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";

import AuthContext from "./Authentification";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Le courriel est obligatoire")
    .email()
    .label("Courriel"),
});

function RegisterScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/sketch-manlogo.png")}
      />

      <Formik
        initialValues={{ prenom: "", nom: "", email: "", telephone: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="home"
            keyboardType="default"
            name="prenom"
            placeholder="Prénom"
            textContentType="name"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="home"
            keyboardType="default"
            name="nom"
            placeholder="Nom"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Courriel"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="numeric"
            name="telephone"
            placeholder="Téléphone"
            textContentType="telephoneNumber"
          />

          <SubmitButton title="Inscrivez-vous maintenant" />
        </>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    overflow: "visible",
  },
});

export default RegisterScreen;
