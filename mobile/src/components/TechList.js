import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState(['']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([newTech]);
    setNewTech('');
  }

  return (
    <View>
      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={techs}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
}
