import React, {Component} from 'react'
import { Text , View , StyleSheet , TextInput , Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import InfoForm from './screens/InfoForm';

class Form extends Component{
  render(){
    return <InfoForm/>
  }
}

class Main extends Component{

  static navigationOptions = {
    title: 'HOME',
    
  };

  constructor(){
    super()
    this.state = {
      name:'This Name',
      address:'This address'
    }
  }

  changeName = (text) => { 
    this.setState({name:text})
  }

  changeAdress = (text) => {
    this.setState({address:text})
    
    
  }

  render(){
    (this.state.name == '') ? this.setState({name:'this Name'}) : null
    // if ( this.state.name == '') {
    //   this.setState({
    //     name:'this Name',
    //   })
    // }
    if (this.state.address == ''){
      this.setState({
        address:'this address'
      })
    }
    else (null)

    return(
      <View style={{flex:1}}>
      <View style={{flex:1, alignItems:'center', top:50}}>
        <Text>{this.state.name}</Text>
        <Text>{this.state.address}</Text>
      </View>

      <View style={{flex:1, alignItems:'center',}}>
        <TextInput 
        style={{borderWidth:1, borderColor:'black', width:200, marginBottom:10}}
        placeholder="Type Name" 
        onChangeText={this.changeName}/>
        <TextInput 
        style={{borderWidth:1, borderColor:'black', width:200, marginBottom:10,}}
        placeholder="Type Address" 
        onChangeText={this.changeAdress} />
        <Button 
        title="Press" 
        onPress={() => this.props.navigation.navigate('Form', this.state)}
        />
      </View>
      
    </View>
  )}
}


const RootStack = createStackNavigator({
  Home:Main,
  Form:Form,
},
  {
    initialRouteName: 'Home',
  }
)


export default class App extends Component{
  render(){
    return <RootStack/>
  }
}
console.disableYellowBox = true;