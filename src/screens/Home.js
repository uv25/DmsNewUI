import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet,
  Text, View, FlatList, TouchableOpacity } from 'react-native';

import FA5 from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp} from 'react-native-responsive-screen';
import {DATA, DATA2} from '../Data'


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

const GridItem = ({ title }) => (
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

const ListItem = ({ title }) => (
  <TouchableOpacity style={styles.listItem} onPress={ ()=>{itemOnClick()} }>
    
    <View style = {{flexDirection: 'row', alignSelf: 'flex-start', borderColor: 'red', borderWidth: 1}}>
      <View><FA5 name="folder" color={'#0084C4'} size={50} solid /></View>

      <View style={{margin: 5, marginLeft: 15}}>
        <Text style = {styles.title}>{title}</Text>
        <Text style = {styles.secondaryTitle}>Secondary Text</Text>
      </View>

    </View>
    <View style = {{position: 'absolute', right:4, top: 5}}>
      <FA5 name="more-vert" color={'#FFFFFF'} size={20} solid />
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
    gridState?<GridItem title={item.title} />: <ListItem title={item.title} />
  );

  const renderItem2 = ({item}) => (
    <Item2 title = {item.title} />
  );

  const renderGridIcon = () => {
    return(
      gridState?<FA5 name="grid-on" color={'#F9B31D'} size={27} solid />: <FA5 name="grid-off" color={'#F9B31D'} size={27} solid />
    );
  }

  const onGridPressed = () => {
    console.log("Grid Pressed");
    //renderGridIcon();
    if(gridState == true)
    {
      setGridState(false)
    }else{
      setGridState(true)
    }
  }

  const setColNo = () => {
    if(gridState == true)
    {
      return 3
    }else{
      return 1
    }
  }

  const [gridState, setGridState] = useState(true);

  return (
    <View style = {{backgroundColor: '#292F35', flex: 1}}>
      <SafeAreaView style = {styles.containerTop}>
      <FlatList style = {{margin: 0}}
          horizontal
          data={DATA2}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          />
        <TouchableOpacity
          onPress={()=> {onGridPressed()}}>
          {renderGridIcon()}
        </TouchableOpacity>
      </SafeAreaView>
      
      <SafeAreaView style={styles.containerBottom}>
      
      <FlatList
        key = {gridState?'grid':'list'}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns = {setColNo()}
        
      />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  containerTop: {
    flexDirection: 'row',
    backgroundColor: '#292F35',
    borderTopColor: '#FFFFFF65',
    borderBottomColor: '#FFFFFF65',
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  containerBottom: {
    flex: 1,
    
    backgroundColor: '#292F35',
    borderTopColor: '#FFFFFF15',
    borderBottomColor: '#FFFFFF15',
    borderWidth: 2,
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
  listItem: {
    backgroundColor: '#FFFFFF50',
    padding: 5,
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
  secondaryTitle: {
    fontSize: 10,
    color: '#FFFFFF80',
  },
});


export default Home;
