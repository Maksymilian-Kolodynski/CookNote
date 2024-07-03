import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Recipe } from '../../types/Recipe';
import { RootStackParamList } from '../../types/navigation';

type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

const RecipeScreen: React.FC = () => {
  const route = useRoute<RecipeScreenRouteProp>();
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.time}>Czas przygotowania: {recipe.time}</Text>
      <Text style={styles.ingredientsTitle}>Składniki:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.instructionsTitle}>Przygotowanie:</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '100%',
    marginVertical: 20,
  },
  time: {
    fontSize: 16,
    marginVertical: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredient: {
    fontSize: 16,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  instructions: {
    fontSize: 16,
  },
});

export default RecipeScreen;
