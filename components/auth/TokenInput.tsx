import { setWidth } from '@/constants/configs';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, useColorScheme, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 5;
const CELL_SIZE = setWidth(84)/6;
const CELL_BORDER_RADIUS = 10;
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#7f1d1d';

const ACTIVE_CELL_BG_COLOR = '#f7fafe';

type TokenInputProps = {
    onHandleVerifyToken: (token: string) => void
}

const TokenInput = ({onHandleVerifyToken}: TokenInputProps) => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  
  //Hooks
  let colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'

 useEffect(() => {
   onHandleVerifyToken(value)
 }, [value])
 
  return (
      <>
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                caretHidden={false}
                autoFocus={true}
                // showSoftInputOnFocus={false}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell, {color: isDark ? '#ffffff' : '#0C0C0C'}]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
                )}
            />
        </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create({
    root: {flex: 1},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 60},
    cell: {
        // marginHorizontal: 4,
        lineHeight: 40,
        height: CELL_SIZE,
        width: CELL_SIZE,
        ...Platform.select({web: {lineHeight: 65}}),
        fontSize: 35,
        fontWeight: "bold",
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        paddingTop: CELL_SIZE/6,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        // IOS
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
    
        // // Android
        // elevation: 3,
    },

    focusCell: {
      borderWidth: 1,
      borderColor: '#7f1d1d',
    },
    icon: {
        width: 217 / 2.4,
        height: 158 / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default TokenInput;