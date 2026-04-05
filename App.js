import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  // Delete goal by id
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => currentGoals.filter(goal => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Header />

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem text={item.text} id={item.id} onDelete={deleteGoalHandler} />
          )}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 0
  },
  goalListContainer: {
    flex: 5,
    marginTop: 10
  }
});