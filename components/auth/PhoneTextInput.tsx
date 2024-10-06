import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-international-phone-number';

const PhoneTextInput = () => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (phoneNumber: React.SetStateAction<string>) => {
    setInputValue(phoneNumber);
  }

  const handleSelectedCountry = (country: React.SetStateAction<null>) => {
    setSelectedCountry(country);
  }

  return (
    <View style={{ width: '100%', flex: 1, padding: 24, marginTop: "40%" }}>
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
      />
      <View style={{ marginTop: 10 }}>
        <Text>
          Country:{' '}
          {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
        </Text>
        <Text>
          Phone Number:{' '}
          {`${selectedCountry?.callingCode} ${inputValue}`}
        </Text>
      </View>
    </View>
  );
}

export default PhoneTextInput;