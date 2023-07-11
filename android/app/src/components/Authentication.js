import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import TouchID from 'react-native-touch-id';


const Authentication = () => {

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    handleBiometric();
  }, []);

  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then((biometricType) => {
      if (biometricType === 'FaceID') {
        console.log('FaceID is supported.');
      } else {
        console.log('TouchID is supported.');
        TouchID.authenticate('', optionalConfigObject).then((success) => {
          console.log('success', success);
        }).catch((err) => {
          console.log('err', err);
        })
      }
    })
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
};

export default Authentication;
