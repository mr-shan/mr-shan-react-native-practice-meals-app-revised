import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import RecipeDetailsScreen from './screens/RecipeDetails';
import FavoriteRecipesScreen from './screens/FavoriteRecipesScreen';

import AppContextProvider from './store/context';

import COLORS from './constants/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary500 },
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: COLORS.primary500,
      }}
    >
      <Drawer.Screen
        name='CategoryDrawerScreen'
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon({ size, color }) {
            return <Ionicons name='list' size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name='FavoriteRecipeDrawerScreen'
        component={FavoriteRecipesScreen}
        options={{
          title: 'Favorite Recipes',
          drawerIcon({ size, color }) {
            return <Ionicons name='heart' size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='CategoryScreen'>
            <Stack.Screen
              name='CategoryScreen'
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerStyle: { backgroundColor: COLORS.primary500 },
                headerTintColor: 'white',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverviewScreen'
              component={MealsOverviewScreen}
              options={{
                headerTintColor: 'black',
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name='RecipeDetailsScreen'
              component={RecipeDetailsScreen}
              options={{
                headerStyle: { backgroundColor: COLORS.primary500 },
                headerTintColor: 'white',
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
