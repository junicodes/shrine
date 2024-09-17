


import AsyncStorage from '@react-native-async-storage/async-storage'; // import the module


// saving data:
export const saveObjectAsyncStorage = async (title: string, data: any): Promise<any> => {
  try {
       const jsonValue = await AsyncStorage.getItem(title) as any

        if(jsonValue != 'null') {
            await AsyncStorage.setItem(title, JSON.stringify({...JSON.parse(jsonValue), ...data }));
        }else {
            await AsyncStorage.setItem(title, JSON.stringify(data));
        }
  } catch (err) {
    console.log("error storing the data: ", err);
  }
};

// retrieving data
export const getObjectAsyncStorage = async (title: string): Promise<any> => {

    try {

        const jsonValue = await AsyncStorage.getItem(title) as any 

        return jsonValue != 'null' ? JSON.parse(jsonValue) : null;

      } catch(err) {

        console.log("error getting data: ", err);
      }
};

export const clearObjectAsyncStorage = async (title: string): Promise<any> => {
    try {
        await AsyncStorage.removeItem(title);
    } catch (err) {
        console.log("error storing the data: ", err);
    }
}


