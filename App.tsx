import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import RecipeDetailsScreen from './screens/RecipeDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='CategoryScreen'>
          <Stack.Screen
            name='CategoryScreen' 
            component={CategoryScreen}
            options={{
              title: 'All Categories',
              headerStyle: { backgroundColor: '#fc8200' },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name='MealsOverviewScreen'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='RecipeDetailsScreen'
            component={RecipeDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
