import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

interface IProps {
  imageUrl: string;
  title: string;
  duration: number;
}

const MealOverviewItem = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <View style={styles.footer}>
        <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center'
  },
});

export default MealOverviewItem;
