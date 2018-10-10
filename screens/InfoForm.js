import React , { Component } from 'react'
import { Text , View , } from 'react-native'
import { withNavigation } from 'react-navigation' 
import App from '../App'

class InfoForm extends Component{
  static navigationOptions = {
    title: 'HOME',

  };
  render(){
    return(
      <View style={{top:100,alignItems:'center', alignContent:'center'}}>
        <Text>Hello {this.props.navigation.state.params.name}</Text>
        <Text>Kamu alamat di {this.props.navigation.state.params.address}</Text>
      </View>
    )
  }
}

export default withNavigation (InfoForm)