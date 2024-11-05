
import { StyleSheet, Appearance, useColorScheme } from 'react-native';
import { height, setHeight, setWidth } from '../../constants/configs';

type StylesProps = string | null | undefined;

const globalStyles = () => {
    
      //Hooks
    let colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark'
    //Check if app is dark theme
    // const isDark = colorScheme === 'dark';

    return StyleSheet.create({
            separator: {
                marginVertical: 30,
                height: 1,
                width: '80%',
            },
            gcontainer: {
                flex: 1,
                paddingTop: 50,
                padding: 14,
                backgroundColor: isDark ? 'transparent' : 'white'
            },
            gcontainerGray: {
                flex: 1,
                paddingTop: 30,
                padding: 14,
                backgroundColor: isDark ? 'transparent' : '#FBFBFB'
            },
            gcontainerChat: {
                flex: 1,
                backgroundColor: isDark ? 'transparent' : '#FBFBFB'
            },
            gfontRegular: {
                // fontFamily: 'raleway-regular',
            },
            gfontBold: {
                fontFamily: 'raleway-bold'
            },
            gfontSemBold: {
                fontFamily: 'raleway-semibold'
            },
            gcontainerNoHeader: {
                flex: 1,
                paddingTop: 40,
                paddingHorizontal: 14,
                backgroundColor: isDark ? 'transparent' : 'white'
            },
            gShadow: {
                //IOS
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.10,
                shadowRadius: 2.22,
                // Android
                elevation: 2.5,
            },
            ginput: {
                padding: 10,
                color: '#0C0C0C',
                borderRadius: 6,
                // backgroundColor: '#F4F4F4',
                backgroundColor: '#ffffff',
                // fontFamily: 'raleway-regular',
                fontSize: 16,
                marginBottom: 5,
                width: '100%',
                height: 55,
            },
            gselBox: {
                flex: 1,
                position: 'relative',
            },
            gselect: {
                backgroundColor: '#ffffff',
                borderRadius: 6,
                width: '100%',
                height: 45,
                borderColor: '#F4F4F4',
                borderWidth: 1,
            },
            gselectText: {
                textAlign: 'left',
                color: '#757575',
                fontSize: 14,
            },
            gerrorText: {
                color: 'crimson',
                fontWeight: 'bold',
                fontSize: 12,
                height: 14,
                textAlign: 'left',
                textTransform: 'lowercase'
            },
            gbgImg: {
                flex: 1,
                justifyContent: 'center',
            },
            gbtn: {
                backgroundColor: isDark ? 'grey' : '#121212',
                borderColor: isDark ? '#121212' : 'white',
                borderWidth: 2,
                height: 65,
                borderRadius: 6
            },
            gbtnTitle: { 
                color: 'white',
                fontFamily: 'raleway-semibold',
                fontSize: setHeight(1.5)
            },
            ginputEyeIconRight: {
                position: 'absolute',
                right: 15,
                bottom: 10,
                zIndex: 1
            },    
            gHeader: {
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'raleway-semibold',
                color: isDark ? 'white' : '#0C0C0C',
            },
            gpTag: {
                fontSize: 16,
                color: isDark ? 'white' : '#0C0C0C',
            },

            gmodalIcon: {
                width: 250 / 2.4,
                height: 250 / 2.4,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            gmodalHeaderTag: {
                color: isDark ? 'white' : '#0C0C0C',
                fontSize: setHeight(4.5)
            },
            gmodalPtag: {
                color: isDark ? 'white' : '#64626A',
                fontSize: setHeight(3)
            },
            gtextHeaderLarge:{
                fontSize: setHeight(6.7),
                color: isDark ? '#ffffff' : '#121212'
            },
            gtextHeader:{
                fontSize: setHeight(2.5),
                color: isDark ? '#ffffff' : '#121212'
            },
            giconVerySmall:{
                width: setWidth(6),
                height: setHeight(3),
            },
            giconSmall:{
                width: setWidth(7.5),
                height: setHeight(3.5),
            },
            giconMid:{
                width: setWidth(10),
                height: setHeight(6),
            },
            giconLarge:{
                width: setWidth(12),
                height: setHeight(8),
            },
            gFloatLabel: {
                color: isDark ? '#ffffff' : '#757575',
                position: 'absolute',
                left: 20,
                top: -6,
                zIndex: 1,
                paddingHorizontal: 10,
                backgroundColor: isDark ? '#121212' : 'white'
            },
            gGoogle: {
               borderColor: '#E5E5E5'
            },
            gHotmail: { 
                backgroundColor: '#1D70B6',
                borderColor: '#1D70B6'
            }
        })
}


export default globalStyles;