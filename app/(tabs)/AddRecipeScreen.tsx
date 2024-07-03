import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RecipeContext } from '../../context/RecipeContext';
import { Recipe } from '../../types/Recipe';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';

type AddRecipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddRecipe'>;

const AddRecipeScreen: React.FC = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    return <Text>Loading...</Text>; // Możesz dodać lepszą obsługę ładowania
  }

  const { addRecipe } = context;
  const navigation = useNavigation<AddRecipeScreenNavigationProp>();
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleAddRecipe = () => {
    const newRecipe: Recipe = {
      id: Math.random(), // tymczasowy unikalny ID
      name,
      time,
      ingredients: ingredients.split(','),
      instructions,
      image,
    };
    addRecipe(newRecipe);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nazwa przepisu</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Czas przygotowania</Text>
      <TextInput style={styles.input} value={time} onChangeText={setTime} />
      <Text>Składniki</Text>
      <TextInput style={styles.input} value={ingredients} onChangeText={setIngredients} />
      <Text>Opis przygotowania</Text>
      <TextInput style={styles.input} value={instructions} onChangeText={setInstructions} />
      <Text>Link do zdjęcia</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />
      <Button title="Dodaj przepis" onPress={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

export default AddRecipeScreen;
