import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function IndexScreen() {
  // Redirect to tabs for now; later handle auth state
  return <Redirect href="/(tabs)/feed" />;
}
