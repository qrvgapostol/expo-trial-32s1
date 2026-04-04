import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// Ensure these import paths match your folder structure
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // This function receives the text value from the child component
  function addGoalHandler(enteredGoalText) { 
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }, //
    ]);
  };

  return (
    <View style={styles.appContainer}>
      {/* Passing the handler function to GoalInput via a prop */}
      <GoalInput onAddGoal={addGoalHandler} /> 
      
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // Passing the text data to GoalItem via a prop
            return <GoalItem text={itemData.item.text} />; 
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalListContainer: {
    flex: 5
  }
});