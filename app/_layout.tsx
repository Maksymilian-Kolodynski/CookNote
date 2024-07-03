import React from 'react';
import { RecipeProvider } from '../context/RecipeContext';
import AppNavigator from './AppNavigator';

export default function Layout() {
  return (
    <RecipeProvider>
      <AppNavigator />
    </RecipeProvider>
  );
}
