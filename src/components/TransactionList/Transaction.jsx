import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TransactionsContext } from "../../context/TransactionsContext";

const Transaction = ({ data }) => {
  const { removeTransaction } = useContext(TransactionsContext);

  const onRemoveTransaction = () => {
    removeTransaction(data.id);
  }

  return (
    <View style={style.item}>
      <View style={style.dateAndDescription}>
        <Text style={style.date}>{data.date.toLocaleDateString("en-GB")}</Text>
        <Text
          style={data.type === "income" ? style.income : style.expenses}
          >
            {data.type === "income" ? `R$${data.amount}` : `R$-${data.amount}`}
          </Text>
      </View>
      <View>
        <Text style={style.description}>{data.description}</Text>
      </View>
      <View style={style.categoryAndTrash}>
        <Text style={style.category}>{data.category}</Text>
        <TouchableHighlight style={style.trash} onPress={onRemoveTransaction}>
          <Text style={style.itemTrash}>Apagar</Text>
        </TouchableHighlight>        
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  item: {
    flexDirection: 'column',
    backgroundColor: '#1c1c1c',
    justifyContent: "space-evenly",
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
    padding: 12,
    paddingHorizontal: 20,
  },
  dateAndDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    marginRight: 3,
    marginBottom: 2,
    color: '#666666',
  },
  income: {
    marginRight: 3,
    color: '#226c4a',
    fontWeight: '900',
  },
  expenses: {
    marginRight: 3,
    color: '#e74c3c',
    fontWeight: '900',
  },
  description: {
    marginRight: 3,
    color: '#666666',
  },
  categoryAndTrash: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    marginRight: 3,
    color: '#666666',
  },
  trash: {
    backgroundColor: "#111111",
    width: '40%',
    borderRadius: 8,
  },
  itemTrash: {
    color: '#666666',
    textAlign: "center",
  },
})

export default Transaction;