import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    taps:0,
    progress: 0,
  }
}

/************Progress Bar animations*******************/
animate() {
  let progress = 0;
  this.setState({ progress });
  setTimeout(() => {
    setInterval(() => {
      progress += Math.random() / 5;
      if (progress > 1) {
        progress = 1;
      }
      this.setState({ progress });
    },1000);
  },5000);
}


/********Registering Taps***********/
registerTaps(){
  this.setState({
    taps:this.state.taps+1,
  }) 
  if(this.state.taps==1){
    this.animate();
  }
  if(this.state.progress==1){
    alert(this.state.taps)

  }
}


  render() {
    const barWidth = Dimensions.get('screen').width - 100;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Tap the buttons as{'\n'}quickly as you can{'\n'}using two fingers.</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
          width={barWidth}
          progress={this.state.progress}
         />
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Total Taps</Text>
          <Text style={styles.subtitleTextNo}>{this.state.taps}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} disabled={this.state.progress==1?true:false} onPress={()=>this.registerTaps()}>
            <Text style={styles.buttonText}>Tap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} disabled={this.state.progress==1?true:false} onPress={()=>this.registerTaps()}>
            <Text style={styles.buttonText}>Tap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  /*Container along with the Title*/
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     paddingTop:'30%'
   },

   title:{
     fontSize:30,
     fontWeight:'500'
   },

   progressBar:{
     paddingTop:50
   },

   /*Subtitle Design*/

   subtitle:{
     marginTop:'20%',
     justifyContent:'center',
     alignItems:'center'
   },

   subtitleText:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'roboto'
   },

   subtitleTextNo:{
    fontSize:50,
    fontWeight:'500',
    fontFamily:'roboto'
   },

   /*Button Design*/

   buttonContainer:{
    alignItems:'center',
    flexDirection:'row',
    flex:1
   },

   button:{
     width:80,
     height:80,
     borderRadius:80/2,
     backgroundColor:'white',
     margin:40,
     justifyContent:'center',
     alignItems:'center',
     borderColor:'red',
     borderWidth:1
   },

   buttonText:{
     color:'red',
     fontSize:15,
     fontWeight:'900'
   }
});
/************************Abhishek Ganotra*************************/