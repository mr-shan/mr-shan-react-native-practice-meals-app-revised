import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import COLORS from '../constants/colors';

interface IProps {
  duration?: number;
  affordability?: string;
  complexity?: string;
}

const MealHeaderDescription = (props: IProps) => {
  let numberOfDollars = 1;
  if (props.affordability === 'pricey') numberOfDollars = 2;
  else if (props.affordability === 'luxurious') numberOfDollars = 3;

  const dollars = [];
  for (let i = 0; i < numberOfDollars; ++i)
    dollars.push(
      <FontAwesome6 key={i} name='dollar' size={14} color={COLORS.textLight} />
    );

  return (
    <View style={styles.meta}>
      {/* <Text style={styles.metaText}>{props.affordability}</Text> */}
      <View style={styles.affordableView}>
        {dollars.map((item, index) => item)}
      </View>
      <Text
        style={[
          styles.metaText,
          { textAlign: 'center', textTransform: 'capitalize' },
        ]}
      >
        {props.complexity}
      </Text>
      <View style={styles.timeView}>
        <View style={{ paddingTop: 1 }}>
          <FontAwesome6 name='clock' size={14} color={COLORS.textLight} />
        </View>
        <Text style={styles.metaText}>{props.duration} min</Text>
      </View>
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
  },
  affordableView: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 1,
  },
  timeView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    gap: 4,
    alignContent: 'center',
  },
});

export default MealHeaderDescription;
