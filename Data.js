
import { StyleSheet, Text, View } from 'react-native';
export default function List({item}) {
  return (
          <View style={styles.item}>
            <Text style={styles.titleitem}>{item.title}</Text>
            <Text style={styles.ctentitem}>{item.content}</Text>
          </View>
  )
}
const styles = StyleSheet.create({
item:{
    margin: 5,
    padding: 5,
    height: 100,
    width:200,
    borderRadius:10,
    borderWidth:1,
  },
  titleitem:{
    borderBottomWidth:1,
  }
})