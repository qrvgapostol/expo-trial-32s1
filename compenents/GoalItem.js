import { StyleSheet, View, Text } from 'react-native'; //

function GoalItem(props) { //
  return (
    <View style={styles.goalItems}>
      {/* Accessing text via props instead of itemData */}
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({ //
  goalItems: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    fontSize: 16,
  },
});