import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native/types";

class FloatingButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Button</Text>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FloatingButton;
