import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';

const RegisterScreen = () => {

  const [userName, setUserName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [errortext, setErrortext] = useState('');


  return (
    <View style={{flex: 1, backgroundColor: '#307ecc', alignItems: 'center'}}>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <Text>
          Welcome Chirayu
        </Text>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <View>
            <KeyboardAvoidingView enabled>
              <Button
                style={styles.buttonStyle}
                activeOpacity={0.5}
              >
                CHECK IN
              </Button>
              <Button
                style={styles.buttonStyle}
                activeOpacity={0.5}
              >
                CHECK OUT
              </Button>
              {errortext != '' ? (
                <Text style={styles.errorTextStyle}>
                  {errortext}
                </Text>
              ) : null}
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>

    </View>
  )
};

export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
