import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleResult() {
    const newNumber = Math.floor(Math.random() * 60);
    setNumber(newNumber);
    return;
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.result}>{number}</Text>
      <TouchableOpacity style={style.button} onPress={handleResult}>
        <Text style={style.buttonText}>Gerar número aleatório: 0 - 60</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#060e23',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  result: {
    fontSize: 32,
    padding: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#f45e0a',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default App;
