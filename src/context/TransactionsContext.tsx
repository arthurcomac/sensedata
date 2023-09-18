import React, { createContext, useState } from "react";

export type TransactionsContextDTO = {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: string;
}

type TransactionsContextProviderProps = {
  children: React.ReactNode;
}

interface ITransactionsContext {
  transactions: TransactionsContextDTO[],
  addTransaction: (transaction: TransactionsContextDTO) => void
  removeTransaction: (id: string) => void
}

const TransactionContextDefaultvalue = {
  transactions: [],
  addTransaction: function (transaction: TransactionsContextDTO) {},
  removeTransaction: function (id: string) {}
}
const TransactionsContext = createContext<ITransactionsContext>(TransactionContextDefaultvalue);

const TransactionsContextProvider = ({ children }: TransactionsContextProviderProps) => {
  const arrayTransactions = [
    {
      id: '0',
      date: new Date(),
      description: 'Teste',
      amount: 10,
      category: 'Moradia',
      type: 'expense'
    },
    {
      id: '1',
      date: new Date(),
      description: 'Teste1',
      amount: 20,
      category: 'Lazer',
      type: 'income'
    },
    {
      id: '2',
      date: new Date(),
      description: 'Teste2',
      amount: 30,
      category: 'Saúde',
      type: 'expense'
    },
  ];
  const [transactions, setTransactions] = useState<TransactionsContextDTO[]>(arrayTransactions);

  const addTransaction = (transaction: TransactionsContextDTO) => {
    setTransactions([...transactions, transaction]);
  }

  const removeTransaction = (id: string) => {
    const parsedTransactions = transactions.filter(item => item.id !== id)
    setTransactions(parsedTransactions);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export { TransactionsContext, TransactionsContextProvider };