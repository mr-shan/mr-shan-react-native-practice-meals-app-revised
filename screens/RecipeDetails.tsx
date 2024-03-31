import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';

import MealHeaderDescription from '../components/MealHeaderDescription';

import { MEALS } from '../data/dummy-data';
import COLORS from '../constants/colors';
import IconButton from '../components/IconButton';

interface IProps {
  route: RouteProp<any>;
  navigation: NavigationProp<ParamListBase>;
}

const RecipeDetailsScreen = (props: IProps) => {
  const [favorite, setFavorite] = useState(false);
  const mealId = props.route.params?.mealId;
  if (!mealId) props.navigation.navigate('CategoryScreen');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favoriteButtonPressHandler = () => {
    const newFav = !favorite;
    setFavorite(newFav);
    if (selectedMeal) selectedMeal.favorite = newFav;
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => (
        <IconButton
          color='white'
          icon={favorite ? 'star' : 'staro'}
          size={18}
          onPress={favoriteButtonPressHandler}
        />
      ),
    });
  }, [favorite]);

  useEffect(() => {
    if (selectedMeal) {
      setFavorite(selectedMeal.favorite)
    }
  }, [selectedMeal])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
        <View style={{ paddingHorizontal: 10, paddingBottom: 7 }}>
          <MealHeaderDescription
            affordability={selectedMeal?.affordability}
            complexity={selectedMeal?.complexity}
            duration={selectedMeal?.duration}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.ingredients}>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <View style={styles.ingredientsWrapper}>
            {selectedMeal?.ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItemView}>
                <Text style={styles.ingredientItem}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.ingredients}>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>Steps to Prepare</Text>
          </View>
          {selectedMeal?.steps.map((item, index) => (
            <View key={index} style={styles.stepsView}>
              <Text>{index + 1}. </Text>
              <Text style={styles.stepText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    height: 300,
  },
  header: {
    backgroundColor: COLORS.bg700,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
  },
  body: {
    padding: 16,
    paddingTop: 0,
  },
  subtitleView: {
    borderBottomColor: COLORS.primary900,
    borderBottomWidth: 2,
    marginBottom: 16,
    width: '100%',
    maxWidth: 320,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.primary500,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  ingredients: {
    marginTop: 25,
    alignItems: 'center',
  },
  ingredientsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  ingredientItemView: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: COLORS.bg500,
    borderRadius: 16,
  },
  ingredientItem: {
    fontSize: 16,
    color: COLORS.text,
  },
  stepsView: {
    padding: 6,
    width: '100%',
    flexDirection: 'row',
    gap: 2,
  },
  stepText: {
    color: COLORS.text,
    fontSize: 16,
  },
});

export default RecipeDetailsScreen;
