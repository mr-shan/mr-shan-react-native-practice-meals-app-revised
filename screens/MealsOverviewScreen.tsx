import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  ListRenderItemInfo,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import Meal from '../models/meal';

import MealOverviewItem from '../components/MealOverviewItem';

interface IProps {
  route: RouteProp<any>;
}

const MealsOverviewScreen = (props: IProps) => {
  const categoryId = props.route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((e) => e.id === categoryId);
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const listRenderItem = (data: ListRenderItemInfo<Meal>) => {
    return (
      <MealOverviewItem
        title={data.item.title}
        imageUrl={data.item.imageUrl}
        duration={data.item.duration}
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
    backgroundColor: '#2d1a2d',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 34,
    gap: 20
  }
});

export default MealsOverviewScreen;
