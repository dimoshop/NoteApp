import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import List from './Data.js';
const Data=[
  {
    id:1,
    title:'Làm bài tập',
    content:'10.00PM Làm bài tập về nha môn tiếng Anh'
  },
  {
    id:2,
    title:'tile',
    content:'Nội dung ở đây'
  },
  {
    id:3,
    title:'tile',
    content:'Nội dung ở đây'
  }
]
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY NOTES</Text>
      <View style={styles.search}>
        
      </View>
      <View style={styles.listitem}>
      {Data.map((item) => {
          return <List item={item} />;
        })}
      </View>
      <View style={styles.bar}>
        <Icon name="post-add" size={30} color='pink' styles={{width:'20'}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%'
  },
  title:{
    backgroundColor:'pink',
    height:50,
    width:'100%',
    textAlign:"center",
    justifyContent:"center",
    marginTop:25,
    fontSize:30,
    top:0,
  },
  listitem:{
    display:'flex',
    flexDirection:'row',
    margin: 10,
   justifyContent: 'center',
   flexWrap:'wrap'
  },
  bar:{
    padding:5,
    borderStyle:'solid',
    borderWidth:1,
    width:'100%',
    position: "absolute",
    bottom:0,
   display:'flex',
  alignItems:'center'
  }
});
