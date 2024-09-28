import { StyleSheet, TextInput, useColorScheme, GestureResponderEvent, Text, View, Image, Pressable, TouchableOpacity} from 'react-native';
import { Formik, FormikValues, FormikHelpers } from "formik";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Tooltip} from '@rneui/themed';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button, Checkbox } from 'react-native-paper';
import ToastModal from '../shared/ToastModal';
import { FormPayload_SignIn } from '@/types/auth';
import globalStyles from '@/assets/styles/global';
import { validateEmail } from '@/constants/validations/auth';
import { ThemedText } from '../ThemedText';
import { offlineImage } from '@/constants/images';
import { ThemedView } from '../ThemedView';



export default function FormSignUp({}: any) {
  //States
  const [checked, setChecked] = React.useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  //Global Styles Import 
  const { gselBox, ginput } = globalStyles();
  const [payload, setPayload] = useState<FormPayload_SignIn>({
      email: '',
      password: '',
  })
   //Hooks

   const navigation = useNavigation();
   let colorScheme = useColorScheme();

    //Handler Function
    const handleFormSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<GestureResponderEvent>) => {
        //validate is state is selected 

        if(values.email === '' && values.password === '') {
            ToastModal({
                message: "Please enter email and password to continue",
                position: "top", //top | bottom
                color: "#d6ae0d", 
            });
            return false;
        }

        if(validateEmail(values.email)) {
            ToastModal({
                message: "Email address not valid, please check email and try again",
                position: "top", //top | bottom
                color: "#d6ae0d",
            });
            return false;
        }

        //Update context state with selected estate

        //Get selected estate id form payload

        //Navigate to dashboard after login
        // navigation.navigate("Root")
       
    };


  return (
    <View className={`py-5`}>
      <Formik 
        enableReinitialize
        initialValues={{...payload} as any}
        onSubmit={handleFormSubmit}
        >
        {(props: any) => (
            <View>
                <View>
                    <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Full name</ThemedText>
                    <View>
                        <Image
                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                            source={offlineImage.profile}
                        />
                        <TextInput
                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                            style={[ginput]}
                            placeholder="Full name"
                            placeholderTextColor="#ABAFB3"
                            keyboardType="default"
                            onChangeText={props.handleChange('fullname')}
                            value={props.values.fullname}
                            onBlur={props.handleBlur('fullname')}
                            maxLength={20}
                        />
                    </View>
                </View>
                <View>
                    <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Email</ThemedText>
                    <View>
                        <Image
                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                            source={offlineImage.email}
                        />
                        <TextInput
                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                            style={[ginput]}
                            placeholder="Email address"
                            placeholderTextColor="#ABAFB3"
                            keyboardType="email-address"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                            maxLength={20}
                        />
                    </View>
                </View>
                <View>
                    <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Phone Number</ThemedText>
                    <View>
                        <Image
                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                            source={offlineImage.phone}
                        />
                        <TextInput
                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                            style={[ginput]}
                            placeholder="(+61) 405 1993 90"
                            placeholderTextColor="#ABAFB3"
                            keyboardType="phone-pad"
                            onChangeText={props.handleChange('phone')}
                            value={props.values.phone}
                            onBlur={props.handleBlur('phone')}
                            maxLength={20}
                        />
                    </View>
                </View>
                <View>
                    <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Password</ThemedText>
                    <View>
                        <Image
                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                            source={offlineImage.password}
                        />
                        <TextInput
                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                            style={[ginput]}
                            placeholder="Password"
                            placeholderTextColor="#ABAFB3"
                            onChangeText={props.handleChange('password')}
                            secureTextEntry={hidePassword}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                            maxLength={20}
                            
                        />
                        <Pressable
                            className={`absolute z-20 top-4 right-3`}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Image
                                className={`w-5 h-5`}
                                source={offlineImage.eye}
                            />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Confirm Password</ThemedText>
                    <View>
                        <Image
                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                            source={offlineImage.password}
                        />
                        <TextInput
                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                            style={[ginput]}
                            placeholder="Confirm Password"
                            placeholderTextColor="#ABAFB3"
                            onChangeText={props.handleChange('confirmPassword')}
                            secureTextEntry={hideConfirmPassword}
                            value={props.values.confirmPassword}
                            onBlur={props.handleBlur('confirmPassword')}
                            maxLength={20}
                            
                        />
                        <Pressable
                            className={`absolute z-20 top-4 right-3`}
                            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                        >
                            <Image
                                className={`w-5 h-5`}
                                source={offlineImage.eye}
                            />
                        </Pressable>
                    </View>
                </View>
                
                <View className='flex flex-row justify-left mt-6 flex-wrap space-x-2'>
                    <TouchableOpacity onPress={() => {
                        console.log("ready to work")
                        setChecked(!checked)
                    }}>
                        <View className={`${checked ? "bg-red-900" : "bg-none border border-red-900"} w-6 h-6 rounded-lg relative justify-center align-middle flex flex-row`}>
                            {
                                checked && <Image
                                    className={`w-5 h-5 absolute top-0.5`}
                                    source={offlineImage.checkedIcon}
                                />
                            }
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text className='text-gray-400'>
                            I agree to the company 
                            <Text className='text-red-900'> Term of Service</Text> 
                            &nbsp;and
                        </Text>
                        <Text className='text-red-900'>Privacy Policy</Text>
                    </View>
                </View>
                <View className={`w-full mx-auto pt-6`}>
                    <Button
                        icon=""
                        mode="contained"
                        textColor="white"
                        labelStyle={{fontSize: 16}}
                        buttonColor="#7f1d1d"
                        rippleColor="#7F1D1D7A"
                        className={`rounded-xl h-14 justify-center`}
                        onPress={ async () => {
                            // await saveObjectAsyncStorage('isOnboarding', {status: true});
                            // return router.replace("/registration")
                        }}
                    >
                        Sign up
                    </Button>
                    
                </View>
            </View>
            )
        }
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    title: {
       fontSize: 20,
       fontFamily: 'raleway-semibold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
