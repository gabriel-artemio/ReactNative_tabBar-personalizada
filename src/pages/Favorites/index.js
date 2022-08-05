import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Salvos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white'
  }
});
