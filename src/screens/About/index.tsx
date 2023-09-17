import React from "react";
import { StyleSheet, View, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
        <Text>Aplicativo de controle financeiro.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;