import { StyleSheet, View, FlatList, Platform } from 'react-native';

import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryTile from '../components/CategoryTile';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const CategoryScreen = (props: IProps) => {
  const pressHandler = (id: string) => {
    console.log(id);
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d1a2d',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  header: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  flatListContentStyle: {
    gap: 20,
    padding: 20,
    paddingBottom: Platform.OS === 'android' ? 64 : 48,
  },
  flatListColumnWrapperStyle: {
    gap: 20,
  },
});

export default CategoryScreen;
