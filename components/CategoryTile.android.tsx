import { StyleSheet, View, Pressable, Text } from 'react-native';

interface IProps {
  id: string,
  title: string;
  color: string;
  onPress: (id: string) => void;
}

const CategoryTile = (props: IProps) => {
  const pressHandler = () => {
    props.onPress(props.id)
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: '#aaa' }}
        style={[styles.pressable, { backgroundColor: props.color }]}
        onPress={pressHandler}
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    borderRadius: 10,
    flex: 1,
    width: 150,
    height: 150,
    overflow: 'hidden'
  },
  pressable: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoryTile;
