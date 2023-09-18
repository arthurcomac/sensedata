import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TransactionList from "../../components/TransactionList";
import SearchBar from "./SearchBar";
import { StatusBar } from "react-native";
import { View } from "native-base";

const Transactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const onFilterTransactions = (transactions) => {
    setFilteredTransactions(transactions);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar onFilterTransactions={onFilterTransactions} />
      </View>
      <ScrollView style={styles.scroll}>
        <TransactionList transactions={filteredTransactions} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  scroll: {
    width: "100%",
  }
});

export default Transactions;