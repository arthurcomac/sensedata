import React, {Component, useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface ButtonNewProps {
  color: String,
  size: Number
}
const ButtonNew = ({color, size}: ButtonNewProps) => {
  return (
    <View style={styles.container}>
      <Text><Feather name="plus" color={"#1c1c1c"} size={50} /></Text>
    </View>      
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 12,
  },
  modal: {
    backgroundColor: '#18181B',
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: '#52525B',
    width: 56,
  },
});

export default ButtonNew;
