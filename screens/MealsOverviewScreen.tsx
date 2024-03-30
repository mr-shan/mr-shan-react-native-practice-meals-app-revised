import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  ListRenderItemInfo,
} from 'react-native';
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import Meal from '../models/meal';

import MealOverviewItem from '../components/MealOverviewItem';
import COLORS from '../constants/colors';
import { useEffect } from 'react';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const MealsOverviewScreen = (props: IProps) => {
  const categoryId = props.route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((e) => e.id === categoryId);
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory?.title,
      headerStyle: { backgroundColor: selectedCategory?.color },
      headerBackTitle: 'Back',
    });
  }, []);

  const pressHandler = (id: string) => {
    props.navigation.navigate('RecipeDetailsScreen', { mealId: id });
  };

  const listRenderItem = (data: ListRenderItemInfo<Meal>) => {
    return (
      <MealOverviewItem
        id={data.item.id}
        title={data.item.title}
        imageUrl={data.item.imageUrl}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(meal: Meal) => meal.id}
        renderItem={listRenderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg500,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 34,
    gap: 20,
  },
});

export default MealsOverviewScreen;
