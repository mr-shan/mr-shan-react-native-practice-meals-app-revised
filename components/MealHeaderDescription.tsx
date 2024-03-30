import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../constants/colors';

interface IProps {
  duration?: number;
  affordability?: string;
  complexity?: string;
}

const MealHeaderDescription = (props: IProps) => {
  return (
    <View style={styles.meta}>
      <Text style={styles.metaText}>{props.affordability}</Text>
      <Text style={[styles.metaText, { textAlign: 'center' }]}>
        {props.complexity}
      </Text>
      <Text style={[styles.metaText, { textAlign: 'right' }]}>
        {props.duration} min
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  metaText: {
    color: COLORS.textLight,
    flex: 1,
  },
});

export default MealHeaderDescription;
