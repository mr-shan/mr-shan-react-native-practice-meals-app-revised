import { Pressable, View, StyleSheet } from 'react-native';
import { AntDesign, createIconSet } from '@expo/vector-icons';

interface IProps {
  onPress: () => void;
  color: string;
  icon: any;
  size: number;
}

const IconButton = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <AntDesign name={props.icon} size={props.size} color={props.color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  pressed: {
    opacity: 0.6,
  },
});

export default IconButton;
