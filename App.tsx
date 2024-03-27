import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryScreen />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
