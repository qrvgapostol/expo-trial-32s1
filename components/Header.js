import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My Goals</Text>
      <MaterialIcons name="account-circle" size={30} color="white" />
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
  }
});

export default Header;