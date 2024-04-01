import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealOverviewList from '../components/MealOverviewList';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const MealsOverviewScreen = (props: IProps) => {
  const categoryId = props.route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((e) => e.id === categoryId);
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory?.title,
      headerStyle: { backgroundColor: selectedCategory?.color },
      headerBackTitle: 'Back',
    });
  }, []);

  const pressHandler = (id: string) => {
    props.navigation.navigate('RecipeDetailsScreen', { mealId: id });
  };

  return (
    <MealOverviewList meals={meals} onPress={pressHandler}/>
  );
};

export default MealsOverviewScreen;
