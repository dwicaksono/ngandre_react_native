import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import color from "../constant/colors";
import { StyleSheet } from "react-native";

const HeaderButtonApps = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "ios" ? color.colorPrimary : color.colorThird}
    />
  );
};

export default HeaderButtonApps;

const styles = StyleSheet.create({});
