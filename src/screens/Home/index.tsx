import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { TransactionsContext } from "../../context/TransactionsContext";
import Highlight from "./Highlight";
import TransactionList from "../../components/TransactionList"

const Home = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <SafeAreaView style={styles.container}>
      <Highlight />
      <TransactionList transactions={transactions} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
  },
});

export default Home;