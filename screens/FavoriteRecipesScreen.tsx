import { StyleSheet, View, Text } from 'react-native';
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';

import MealOverviewList from '../components/MealOverviewList';

import COLORS from '../constants/colors';
import { useContext } from 'react';
import { AppContext } from '../store/context';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const FavoriteRecipesScreen = (props: IProps) => {
  const appContext = useContext(AppContext);
  const meals = MEALS.filter((meal) =>
    appContext.favoriteMealIds.includes(meal.id)
  );

  if (meals.length === 0) {
    return (
      <View style={styles.noRecipesContainer}>
        <Text style={styles.noRecipesText}>No favorite recipes found!</Text>
      </View>
    );
  }

  const pressHandler = (id: string) => {
    props.navigation.navigate('RecipeDetailsScreen', { mealId: id });
  };

  return <MealOverviewList meals={meals} onPress={pressHandler} />;
};

const styles = StyleSheet.create({
  noRecipesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecipesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
});

export default FavoriteRecipesScreen;
