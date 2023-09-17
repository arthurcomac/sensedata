import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from "react-native";

const Highlight = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>SALDO</Text>
        <Text style={styles.text}>R$ 0,00</Text>
      </View>

      <View style={styles.records}>
        <View>
          <Text style={styles.text}>RECEITAS</Text>
          <Text style={styles.text}>R$ 0,00</Text>
        </View>

        <View>
          <Text style={styles.text}>DESPESAS</Text>
          <Text style={styles.text}>R$ 0,00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 200,
    width: '100%',
    backgroundColor: '#f1f1f1f1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
  },
  records: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default Highlight;