import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
