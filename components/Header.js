import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My Goals</Text>
      <Pressable onPress={() => setModalVisible(true)}>
        <MaterialIcons name="account-circle" size={30} color="white" />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome to the Goal List App!</Text>

            <Pressable onPress={() => setModalVisible(false)} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#3f7579',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
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
    marginBottom: 10
  },
  button: {
    backgroundColor: '#3f7579',
    padding: 8,
    borderRadius: 5
  },
  buttonText: {
    color: 'white'
  }
});

export default Header;