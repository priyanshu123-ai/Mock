import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView style={styles.cont}>
      <Button title="Profile"></Button>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
