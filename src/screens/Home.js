import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet,
  Text, View, FlatList, TouchableOpacity } from 'react-native';

import FA5 from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp} from 'react-native-responsive-screen';

const itemMenuOnClick = ()=> {
  console.log("Item menu on click working");
}

const itemOnClick = ()=> {
  console.log('Item clicked');
}

const Item2 = ({ title }) => (
  <TouchableOpacity >
    
    <View style = {{flexDirection: 'row'}}>
    <FA5 style = {{justifyContent: 'center'}}
        name='keyboard-arrow-right' 
        color={'#FFFFFF'} 
        size={20}
        />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item} onPress={ ()=>{itemOnClick()} }>
    <FA5 style = {{position: 'absolute', right: 0, top: 5}} 
        name='more-vert' 
        color={'#FFFFFF'} 
        size={20}
        onPress={()=> itemMenuOnClick()}/>
    <View style = {{flexDirection: 'row', alignItems: 'center'}}>

      {/* <FA5 style = {{position: 'absolute', right: 0, top: 0}} 
        name='more-vert' 
        color={'#FFFFFF'} 
        size={20}
        onPress={()=> itemMenuOnClick()}/> */}
      <View style = {styles.itemContainer}>
        { renderIcon() }
      </View>

    </View>
    
    <View style = {{}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const renderIcon = (props) => {
   let icon;
   icon = <FA5 name="folder" color={'#0084C4'} size={50} solid />;
   return icon;
}

const Home = () => {
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const renderItem2 = ({item}) => (
    <Item2 title = {item.title} />
  );
  return (
    <>
      <SafeAreaView style = {styles.containerTop}>
      <FlatList style = {{margin: 10}}
          horizontal
          data={DATA2}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          />
      </SafeAreaView>
      
      <SafeAreaView style={styles.containerBottom}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns = {3}
        
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  containerTop: {
    
    backgroundColor: '#292F35',
    borderTopColor: '#FFFFFF15',
    borderBottomColor: '#FFFFFF15'
  },
  containerBottom: {
    flex: 1,
    
    backgroundColor: '#292F35',
    borderTopColor: '#FFFFFF15'
  },
  item: {
    backgroundColor: '#FFFFFF50',
    padding: 0,
    margin: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

const DATA2 = [
  {
    id: '1',
    title: 'root'
  },
  {
    id: '2',
    title: 'inbox'
  }
];

const DATA = [
  {
    id: '1',
    title: '1st Item',
    type: 'folder'
  },
  {
    id: '2',
    title: '2 Item',
    type: 'folder'
  },
  {
    id: '3',
    title: '3rd Item',
    type: 'folder'
  },
  {
    id: '4',
    title: '4th Item',
    type: 'folder'
  },
  {
    id: '5',
    title: '5th Item',
    type: 'folder'
  },
  {
    id: '6',
    title: '6th Item',
    type: 'folder'
  },
  {
    id: '7',
    title: '7th Item',
    type: 'file'
  },
  {
    id: '8',
    title: '8th Item',
    type: 'file'
  },
  {
    id: '9',
    title: '9th Item',
    type: 'file'
  },
];
export default Home;
