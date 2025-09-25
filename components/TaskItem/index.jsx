import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// Importa o componente Button da pasta 'Button'
import Button from '../Button';

const Input = ({ value, onChangeText, onPressButton }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicionar nova tarefa..."
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        title="Adicionar"
        onPress={onPressButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '70%',
    borderRadius: 8,
  },
});

export default Input;