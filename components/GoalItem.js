import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native';

function GoalItem({ text, id, onDelete }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.goalItems}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this goal?
            </Text>

            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => {
                  onDelete(id);
                  setModalVisible(false);
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>

              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
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
    marginBottom: 15,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    backgroundColor: '#3f7579',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  buttonText: {
    color: 'white'
  }
});

export default GoalItem;