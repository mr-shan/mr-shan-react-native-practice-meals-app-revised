import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  ListRenderItemInfo,
} from 'react-native';

import Meal from '../models/meal';

import MealOverviewItem from '../components/MealOverviewItem';
import COLORS from '../constants/colors';

interface IProps {
  meals: Meal[];
  onPress: (id: string) => void;
}

const MealOverviewList = (props: IProps) => {

  const listRenderItem = (data: ListRenderItemInfo<Meal>) => {
    return (
      <MealOverviewItem
        id={data.item.id}
        title={data.item.title}
        imageUrl={data.item.imageUrl}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        onPress={props.onPress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.meals}
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
  }
});

export default MealOverviewList;
