import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Platform,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryTile from '../components/CategoryTile';

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.header}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item: Category) => item.id}
          renderItem={(data) => (
            <CategoryTile color={data.item.color} title={data.item.title} />
          )}
          contentContainerStyle={styles.flatListContentStyle}
          columnWrapperStyle={styles.flatListColumnWrapperStyle}
          numColumns={2}
        />
      </SafeAreaView>
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
