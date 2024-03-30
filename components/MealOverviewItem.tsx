import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import COLORS from '../constants/colors';

interface IProps {
  id: string;
  imageUrl: string;
  title: string;
  duration: number;
  affordability: string;
  complexity: string;
  onPress: (id: string) => void;
}

const MealOverviewItem = (props: IProps) => {
  const pressHandler = () => {
    props.onPress(props.id);
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={(data) => (data.pressed ? { opacity: 0.7 } : {})}
        android_ripple={{ color: '#ccc' }}
        onPress={pressHandler}
      >
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <View style={styles.footer}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaText}>{props.affordability}</Text>
            <Text style={styles.metaText}>{props.complexity}</Text>
            <Text style={styles.metaText}>{props.duration}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg700,
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
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
    marginTop: 8,
  },
  metaText: {
    color: COLORS.textLight,
    flex: 1,
    textAlign: 'center'
  },
});

export default MealOverviewItem;
