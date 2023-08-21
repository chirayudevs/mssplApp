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
  ToastAndroid
} from 'react-native';
import moment from 'moment';
import { Button } from 'react-native-paper';

const PunchTimeRecordScreen = () => {

  const [userName, setUserName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [errortext, setErrortext] = useState('');
  const [checkInDisabled, setCheckInDisabled] = useState(false);
  const [checkOutDisabled, setCheckOutDisabled] = useState(true);

  const getTime = (id) => {
    const punchTime = moment().utcOffset('+05:30').format('hh:mm:ss a');
    console.log({punchTime})
      if(id === 'checkIn')
      {
        ToastAndroid.show(`Checked In successfully at ${punchTime}`, ToastAndroid.SHORT)
        setCheckInDisabled(true);
      } if ((id === 'checkOut') && (checkInDisabled === true)) {
        ToastAndroid.show(`Checked Out successfully at ${punchTime}`, ToastAndroid.SHORT)
        setCheckOutDisabled(false);
      }
  };

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
                id='checkIn'
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => getTime('checkIn')}
                disabled={checkInDisabled}
              >
                CHECK IN
              </Button>
              <Button
                id='checkOut'
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => getTime('checkOut')}
                disabled={!checkInDisabled}
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

export default PunchTimeRecordScreen;

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
