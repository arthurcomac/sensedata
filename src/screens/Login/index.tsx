import { View, StyleSheet, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, KeyboardType, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoandig] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setIsLoandig(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoandig(false);
    }
  }

  const signUp = async () => {
    setIsLoandig(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoandig(false);
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.contentInput}>
        <TextInput style={styles.input} value={email} placeholder="Email" placeholderTextColor={"white"} autoCapitalize="none" onChangeText={text => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} keyboardType="number" value={password} placeholder="Password" placeholderTextColor={"white"} autoCapitalize="none" onChangeText={text => setPassword(text)}></TextInput>

        { isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> 
        ) : (
          <View style={styles.allButtons}>
            <TouchableHighlight onPress={() => signIn()}>
              <View>
                <Text style={styles.buttonSubmit}>Acessar</Text>
              </View>
            </TouchableHighlight>          
            <TouchableHighlight onPress={() => signUp()}>
              <View>
                <Text style={styles.buttonCreate}>Crie sua conta</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    padding: 12,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#111111",
  },
  contentInput: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    alignItems: "center",
    width: '90%',
    height: "25%",
    fontSize: 12,
    borderRadius: 50,
    padding: 30,
    backgroundColor: "#666666",
  },
  allButtons: {
    alignItems: "center",
  },
  buttonSubmit: {
    backgroundColor: '#666666',
    color: '#ffffff',
    height: 45,
    fontSize: 25,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  buttonCreate: {
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default Login;