import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppFormPicker from "./AppFormPicker";
import Screen from "./Screen";

import AuthContext from "./Authentification";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Outils", value: 1 },
  { label: "Services", value: 2 },
  { label: "Échange", value: 3 },
];

function ProposerService() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Titre" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Prix"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Catégories"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="adresse"
          numberOfLines={3}
          placeholder="Adresse"

        />




        <SubmitButton title="Envoyez" />
      </AppForm>
    </Screen>
  );
}

export default ProposerService;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
