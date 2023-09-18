import { StyleSheet } from "react-native";
import TransactionItem from "./Transaction";
import { ScrollView } from "react-native-gesture-handler";

const TransactionList = ({ transactions }) => {
  return (
    <ScrollView style={style.item}>
      {transactions ? transactions.map((transaction, index) => {
        return <TransactionItem data={transaction} key={index} />
      }) :
        null
      }
    </ScrollView>
  )
}

export default TransactionList;

const style = StyleSheet.create({
  item:{
    width: "100%",
  },
})