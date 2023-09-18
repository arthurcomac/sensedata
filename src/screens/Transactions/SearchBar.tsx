import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Select } from "native-base";
import { TransactionsContext, TransactionsContextDTO } from "../../context/TransactionsContext";

interface ISearchBar {
  onFilterTransactions: (transactions: TransactionsContextDTO[]) => {}
}

const SearchBar = ({ onFilterTransactions }: ISearchBar) => {
  const { transactions } = useContext(TransactionsContext);

  const [filterType, setFilterType] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const onSearchTransaction = () => {
    let data = [];

    if (filterType.length !== 0) {
      let typeTransactions = transactions.filter(item => item.type === filterType);
      data = [...data, ...typeTransactions];
    }

    if (filterCategory.length !== 0) {
      let categorieTransactions = transactions.filter(item => item.category === filterCategory);
      data = [...data, ...categorieTransactions];
    }

    onFilterTransactions(data);
  }

  return (
    <View style={styles.container}>
      <Select
        selectedValue={filterCategory}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Selecione uma categoria"
        style={styles.selectCategory}
        _selectedItem={{
          bg: "teal.600",
      }} mt={1} onValueChange={itemValue => setFilterCategory(itemValue)}>
        <Select.Item label="Educação" value="Educação" />
        <Select.Item label="Moradia" value="Moradia" />
        <Select.Item label="Saúde" value="Saúde" />
        <Select.Item label="Lazer" value="Lazer" />
      </Select>

      <Select
        selectedValue={filterType}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Selecione uma entrada"
        style={styles.selectType}
        _selectedItem={{
          bg: "teal.600",
      }} mt={1} onValueChange={itemValue => setFilterType(itemValue)}>
        <Select.Item label="Receita" value="income" />
        <Select.Item label="Despesa" value="expense" />
      </Select>

      <TouchableOpacity onPress={onSearchTransaction} style={styles.touchButtomFilter}>
        <Text style={styles.buttomFilter}>FILTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    maxHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  selectCategory: {
    color: "#666666",
  },
  selectType: {
    color: "#666666",
  },
  touchButtomFilter: {
    flex: 1,
    width: 170,
    maxHeight: 40,
    marginTop: 10,
    backgroundColor: "#666666",
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 8,
  },
  buttomFilter: {
    color: "#111111",
  },
});

export default SearchBar;