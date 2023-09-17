import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Highlight from "./Highlight";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Highlight />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default Home;