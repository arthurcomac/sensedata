import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from "react-native";
import { TransactionsContext } from "../../context/TransactionsContext";

const Highlight = () => {
  const { transactions } = useContext(TransactionsContext);

  const filterCategoryExpense = transactions.filter((item)=> item.type === "expense").map(({amount}) => ({amount}))
  const filterCategoryIncome = transactions.filter((item)=> item.type === "income").map(({ amount }) => ({ amount }))
 
  const sumOfExpenses = filterCategoryExpense.reduce((accumulator, currentValue) => {
    accumulator += currentValue.amount;
    return accumulator;
  }, 0);

  const sumOfIncome = filterCategoryIncome.reduce((accumulator, currentValue) => {
    accumulator += currentValue.amount;
    return accumulator;
  }, 0);

  function imputAndOutputSubtration (sumOfIncome: number, sumOfExpenses: number){
    return sumOfIncome - sumOfExpenses;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>SALDO</Text>
        <Text style={styles.text}>R$ {imputAndOutputSubtration(sumOfIncome, sumOfExpenses)}</Text>
      </View>

      <View style={styles.records}>
        <View style={styles.inRecords}>
          <Text style={styles.text}>RECEITAS</Text>
          <Text style={styles.text}>R$ {sumOfIncome}</Text>
        </View>

        <View>
          <Text style={styles.text}>DESPESAS</Text>
          <Text style={styles.text}>R$ {sumOfExpenses}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    height: 150,
    width: '100%',
    backgroundColor: '#1c1c1c',
    borderBottomWidth: 3,
    borderColor: "#111111",
  },
  content: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    marginTop: "7%",
  },
  records: {
    flex:1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-around",
    borderTopWidth: 3,
    borderColor: "#111111",
  },
  inRecords: {
    paddingRight: 60,
    borderRightWidth: 3,
    borderColor: "#111111"
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    color: "#666666",
  },
});

export default Highlight;