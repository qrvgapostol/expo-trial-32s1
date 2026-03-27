import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  
  function addGoalHandler() {
    // Only add if the text isn't just empty spaces
    if (enteredGoalText.trim().length === 0) return;

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      enteredGoalText
    ]);

    // ILO3: Clear the input so it reverts back to the placeholder
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      
      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          onChangeText={goalInputHandler}
          // Binding the value to state makes it a controlled component
          value={enteredGoalText} 
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD GOAL" onPress={addGoalHandler} color="#5e0acc" />
        </View>
      </View>

      {/* List Section */}
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa', // Light, professional background
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: 'white',
    width: '70%',
    marginRight: 8,
    padding: 12,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '25%',
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e9ecef',
    // Shadow/Elevation for aesthetic depth
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  goalText: {
    color: '#343a40',
    fontSize: 15,
    fontWeight: '500',
  },
});