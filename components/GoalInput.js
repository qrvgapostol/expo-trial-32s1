import { useState } from 'react';
import { View, TextInput, Pressable, Text, Modal, StyleSheet } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredText('');
    setModalVisible(false);
  }

  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Add Goal</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        onShow={() => console.log('Modal shown')}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Enter goal"
            style={styles.textInput}
            onChangeText={setEnteredText}
            value={enteredGoalText}
          />
          <Pressable onPress={addGoalHandler} style={styles.button}>
            <Text style={styles.buttonText}>Submit Goal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#3f7579',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: { color: 'white' },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginBottom: 10
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default GoalInput;