import { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable } from 'react-native';

import Header from './components/Header';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [warningVisible, setWarningVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      const updatedGoals = [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ];

      // Show modal if more than 5 goals
      if (updatedGoals.length > 5) {
        setWarningVisible(true);
      }

      return updatedGoals;
    });
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
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
        />
      </View>

      {/* Warning Modal */}
      <Modal
        visible={warningVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setWarningVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              You have more than 5 goals. Avoid overwhelming yourself!
            </Text>

            <Pressable
              onPress={() => setWarningVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  goalListContainer: {
    flex: 5,
    marginTop: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3f7579',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white'
  }
});