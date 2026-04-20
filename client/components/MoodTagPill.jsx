import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MoodTagPill({ mood = "Mood" }) {
  return (
    <View style={styles.pill}>
      <Text style={styles.text}>{mood}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16
  },
  text: {
    fontSize: 12,
    color: "#333",
    fontWeight: "bold"
  }
});
