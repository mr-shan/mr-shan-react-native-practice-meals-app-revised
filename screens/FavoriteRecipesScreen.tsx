import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

import MealOverviewItem from '../components/MealOverviewItem';
import COLORS from '../constants/colors';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const FavoriteRecipesScreen = (props: IProps) => {
  const meals = MEALS.filter((meal) => meal.favorite === true);

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

const flatListGap = 14;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg500,
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: flatListGap,
    paddingVertical: flatListGap,
    paddingBottom: Platform.OS === 'ios' ? flatListGap + 8 : flatListGap,
    gap: flatListGap,
  },
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
