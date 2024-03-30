import { StyleSheet, View, Text } from 'react-native';
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const RecipeDetailsScreen = (props: IProps) => {
  const mealId = props.route.params?.mealId;
  if (!mealId) props.navigation.navigate('CategoryScreen');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Text>REcipe details</Text>
      <Text>{selectedMeal?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RecipeDetailsScreen;
