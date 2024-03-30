import { StyleSheet, View, FlatList, Platform } from 'react-native';

import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryTile from '../components/CategoryTile';
import COLORS from '../constants/colors';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const CategoryScreen = (props: IProps) => {
  const pressHandler = (id: string) => {
    props.navigation.navigate('MealsOverviewScreen', { categoryId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item: Category) => item.id}
        renderItem={(data) => (
          <CategoryTile
            id={data.item.id}
            color={data.item.color}
            title={data.item.title}
            onPress={pressHandler}
          />
        )}
        contentContainerStyle={styles.flatListContentStyle}
        columnWrapperStyle={styles.flatListColumnWrapperStyle}
        numColumns={2}
      />
    </View>
  );
};

const tilesGap = 16;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg500,
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  flatListContentStyle: {
    gap: tilesGap,
    padding: tilesGap,
    paddingBottom: Platform.OS === 'android' ? 22 : 30,
  },
  flatListColumnWrapperStyle: {
    gap: tilesGap,
  },
});

export default CategoryScreen;
