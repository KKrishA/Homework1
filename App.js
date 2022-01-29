import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons"; 
//import * as React from 'react';
//import { Switch } from 'react-native-paper';

export default function App() {
  return(
    <View style={styles.container}>
      <View style = {{marginHorizontal: 25,}}>
        <Text style = {styles.largeText}> Settings </Text>
        <TextInput style = {styles.textInput} placeholder="Search"/>
        <TouchableOpacity styles={styles.rectangle}>
          <View style={styles.circle}>
            <Text style={{marginLeft: 12.5, marginTop: 12.5 }}>KA</Text>
          </View>
            <View>
              <Text style={{marginLeft: 10, fontWeight: "bold", fontSize: 24}}>Krish Arora
              </Text>

              <Text style={{marginLeft: 10, fontWeight: "bold", fontSize: 14}}>
                Apple ID, iCloud, Media & Purchases
              </Text>
          </View>
          <Text style={{marginLeft: "auto", marginTop: 15}}> > </Text>
        </TouchableOpacity>
        <View style={{marginTop: 50, backgroundColor: "white", padding: 12.5, borderRadius: 10}}>
          <View>
              <View style={{ flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#F79630",}}>
                <Ionicons name="airplane" color="#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
              </View>
              <Text style={{fontWeight: "bold"}}>Airplane Mode</Text>
          </View>
        </View>
        
        <View style={{marginTop: 2, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#295EEC",}}>
            <Ionicons name = "wifi" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Wifi</Text>
          </View>
        </View>

        <View style={{marginTop: 2, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#295EEC",}}>
            <Ionicons name = "bluetooth" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Bluetooth</Text>
          </View>
        </View>

        <View style={{marginTop: 2, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#29EC2C",}}>
            <Ionicons name = "cellular" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Cellular</Text>
          </View>
        </View>

        <View style={{marginTop: 2, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#29EC2C",}}>
            <Ionicons name = "share-social" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Hotspot</Text>
          </View>
        </View>

        <View style={{marginTop: 20, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#EB0E0E",}}>
            <Ionicons name = "ios-notifications-circle-outline" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Notifications</Text>
          </View>
        </View>

        <View style={{marginTop: 2, backgroundColor: "white", padding: 10, borderRadius: 10}}> 
          <View style = {{flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "#EB0E54",}}>
            <Ionicons name = "volume-high-outline" color = "#FFF" size={20} style={{marginLeft: 2.5, marginTop: 2}} />
            <Text style={{fontWeight: "bold", marginTop: 5}}>Sound & Haptics</Text>
          </View>
        </View>

      </View>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: "#F0F0F0",


  },

  largeText: {
    fontWeight: "bold",
    fontSize: 36,
  },

  textInput: {
    backgroundColor: "lightgrey",
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
  },

  rectangle: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginTop: 15,
    borderRadius: 10,

  },

  circle: {
    backgroundColor: "lightgrey",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  }
});
