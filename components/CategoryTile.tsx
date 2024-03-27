import { StyleSheet, View, Pressable, Text } from 'react-native';

interface IProps {
  title: string;
  color: string;
}

const CategoryTile = (props: IProps) => {
  return (
    <View style={styles.container}>
    <Pressable
        style={({ pressed }) => [
          styles.pressable,
          { backgroundColor: props.color },
          pressed ? styles.pressed : {},
        ]}
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 0, width: 0 },
    borderRadius: 10,
    flex: 1,
    width: 150,
    height: 150,
  },
  pressable: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    // color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryTile;
