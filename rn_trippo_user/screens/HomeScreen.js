import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedForm from 'react-native-animated-form';
const Background =
  "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={{ uri: Background }} />
            <AnimatedForm delay={100} distance={5}>
                <AnimatedInput placeholder='Full name' underlineColorAndroid='transparent' style={styles.text} />
                <AnimatedInput placeholder='Email' underlineColorAndroid='transparent' style={styles.text} />
                <AnimatedInput placeholder='Phone number' underlineColorAndroid='transparent' style={styles.text} />
                <Animated.View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: '#fff'}}>Register</Text>
                    </TouchableOpacity>
                </Animated.View>
                <TouchableOpacity onPress={() => navigation.navigate('GreenBeanOrder')}>
                    <Text style={{color: 'white'}}>Next >></Text>
                </TouchableOpacity>
            </AnimatedForm>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#919191',
    },
    text: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
      },
      buttonView: {
        height: 40,
        marginTop: 10,
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom: 10,
      },
      button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
});
