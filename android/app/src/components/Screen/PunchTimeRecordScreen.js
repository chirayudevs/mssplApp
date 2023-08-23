import React, {useState, useEffect} from 'react';
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
import PushNotification from 'react-native-push-notification';

const PunchTimeRecordScreen = () => {

  const [userName, setUserName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [errortext, setErrortext] = useState('');
  const [checkInDisabled, setCheckInDisabled] = useState(false);
  const [checkOutDisabled, setCheckOutDisabled] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [running, startTime]);

  PushNotification.createChannel({
    channelId: 'channel-1',
    channelName: 'notificationChannel'
  });

  const showNotification = (title, message) => {
    PushNotification.localNotification({
      channelId: 'channel-1',
      title: title,
      message: message
    })
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const totalProductiveTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if(totalProductiveTime === '08:30:00') {
      ToastAndroid.show('success', ToastAndroid.SHORT);
      showNotification('Timer', 'Your timer is still running')
    }

    return totalProductiveTime;
  };

  const handleCheckIn = () => {
    if (!running) {
      setStartTime(Date.now() - elapsedTime);
    }
    setRunning(!running);
  };

  const handleCheckOut = () => {
    if (running) {
      setTotalTime(totalTime + elapsedTime);
      setRunning(false);
      setElapsedTime(0);
    }
  };

  const getTime = (id) => {
    const punchTime = moment().utcOffset('+05:30').format('hh:mm:ss a');
      if(id === 'checkIn')
      {
        ToastAndroid.show(`Checked In successfully at ${punchTime}`, ToastAndroid.SHORT)
        handleCheckIn();
        setCheckInDisabled(true);
      } if ((id === 'checkOut') && (checkInDisabled === true)) {
        ToastAndroid.show(`Checked Out successfully at ${punchTime}`, ToastAndroid.SHORT)
        handleCheckOut();
        setCheckOutDisabled(false);
      }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000000', alignItems: 'center'}}>
      <View style={{marginTop: 200, alignItems: 'center'}}>
        <Text style={styles.textStyle}>
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
              <View style={styles.timerStyle}>
                <Text style={styles.textStyle}> {formatTime(elapsedTime)} </Text>
              </View>
              <Button
                id='checkOut'
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => getTime('checkOut')}
                disabled={!checkInDisabled}
              >
                CHECK OUT
              </Button>
              <View style={styles.timerStyle}>
                <Text style={styles.textStyle}>Your today's productive time is {formatTime(totalTime)}</Text>
              </View>
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
    backgroundColor: '#D4AF37',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#D4AF37',
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
  timerStyle: {
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 15
  }
});
