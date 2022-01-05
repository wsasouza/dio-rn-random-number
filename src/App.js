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
    backgroundColor: '#191970',
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
    backgroundColor: '#ff8c00',
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
