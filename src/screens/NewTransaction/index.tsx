import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, keyboardType } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Select } from "native-base";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { DatePicker } from "../../components/DatePicker";
import { TransactionsContext } from "../../context/TransactionsContext";

const NewTransaction = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const { addTransaction } = useContext(TransactionsContext);

  const resetFormData = () => {
    setDate(new Date());
    setDescription('');
    setAmount(0);
    setCategory('');
    setType('');
  }

  const onSetDate = (data: Date) => {
    setDate(data);
  }

  const onAddTransaction = () => {
    const transactionData = {
      date,
      description,
      amount,
      category,
      type,
      id: uuidv4()
    };

    addTransaction(transactionData);
    resetFormData();
    navigation.navigate('home')
  }
  
  return (
    <View style={styles.container}>      
      <DatePicker onSetDate={onSetDate} />

      <TextInput
        style={styles.description}
        value={description}
        placeholder="Insira uma descrição"
        placeholderTextColor={"#666666"}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.value}
        value={amount}
        placeholder="Insira o valor"
        placeholderTextColor={"#666666"}
        keyboardType="number"
        onChangeText={(value) => setAmount(parseFloat(value))}
      />

      <Select
        selectedValue={category}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Selecione uma categoria"
        placeholderTextColor={"#666666"}
        style={styles.selectCategory}
        _selectedItem={{
          bg: "teal.600",
      }} mt={1} onValueChange={itemValue => setCategory(itemValue)}>
        <Select.Item label="Educação" value="Educação" />
        <Select.Item label="Moradia" value="Moradia" />
        <Select.Item label="Saúde" value="Saúde" />
        <Select.Item label="Lazer" value="Lazer" />
      </Select>
      <Select
        selectedValue={type}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Selecione entrada ou saída"
        style={styles.selectType}
        placeholderTextColor={"#666666"}
        _selectedItem={{
          bg: "teal.600",
      }} mt={1} onValueChange={itemValue => setType(itemValue)}>
        <Select.Item label="Receita" value="income" />
        <Select.Item label="Despesa" value="expense" />
      </Select>      

      <TouchableOpacity onPress={onAddTransaction} style={styles.touchCreated}>
        <Text style={styles.created}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    width: "55%",
    height: "6%",
    paddingLeft: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 5,
    color: "#666666",
  },
  value: {
    width: "55%",
    height: "6%",
    paddingLeft: 12,
    marginTop: 4,
    marginBottom: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "white",
    color: "#666666",
  },
  selectCategory: {
    color: "#666666",
  },
  selectType: {
    color: "#666666",
  },
  touchCreated: {
    width: "50%",
    height: 40,
    bottom: -18,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#666666",
  },
  created: {
    color: "#111111",
    height: 40,
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
  },
});

export default NewTransaction;