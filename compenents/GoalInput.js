import { useState } from 'react'; //
import { View, TextInput, Button, StyleSheet } from 'react-native'; //

function GoalInput(props) {
  // Local state to handle the text input
  const [enteredGoalText, setEnteredText] = useState(''); 

  function textInputHandler(enteredText) { //
    setEnteredText(enteredText);
  };

  function addGoalHandler() {
    // Executes the function passed from App.js
    props.onAddGoal(enteredGoalText); 
    // Resets the input field to empty
    setEnteredText(''); 
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Your course goals!' 
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText} //
      />
      <Button 
        title='Add Goal' 
        onPress={addGoalHandler} //
        color={'#3f7579'} 
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({ //
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});