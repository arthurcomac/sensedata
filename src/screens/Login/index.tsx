import { View, StyleSheet, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
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
      <KeyboardAvoidingView>
        <TextInput style={styles.input} value={email} placeholder="Email" autoCapitalize="none" onChangeText={text => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder="Password" autoCapitalize="none" onChangeText={text => setPassword(text)}></TextInput>

        { isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> 
        ) : (
          <>
            <Button title="Entrar" onPress={() => signIn()} />
            <Button title="Criar conta" onPress={() => signUp()} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  }
});

export default Login;