import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

const Background =
  "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function PastDeliveriesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={[StyleSheet.absoluteFill, { width: null, height: null }]} source={{ uri: Background }} />
      <View style={styles.content}>
        <Text style={styles.title}>Past GreenBean Deliveries</Text>
        {/* Add billing details here */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Support')}>
          <Text style={{ color: '#fff' }}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
          <Text style={{ color: 'tomato' }}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#919191',
  },
  content: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  link: {
    marginTop: 10,
  },
});
