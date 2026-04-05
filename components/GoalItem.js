import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ text, id, onDelete }) {
  return (
    <Pressable onPress={() => onDelete(id)} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  pressed: {
    opacity: 0.5
  }
});

export default GoalItem;