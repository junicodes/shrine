import { Image, StyleSheet, Platform, View, FlatList, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { offlineImage } from '@/constants/images';
import { Button } from 'react-native-paper';
import CommunityList from '@/components/CommunityList';
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import globalStyles from '@/assets/styles/global';

export default function HomeScreen() {
  const { headerView } = globalStyles();
  const { colorScheme, setColorScheme } = useColorScheme();
  const screenHeight = Dimensions.get('window').height - 300

  return (
    <ThemedView>
      <View className='mt-2 flex flex-row items-center py-5' style={headerView}>
        <View className=''>
          <ThemedText type='subtitle' className=' font-normal text-base leading-6'>Good morning,</ThemedText>
          <View className='flex gap-2 flex-row mt-1'>
            <Image source={offlineImage.user_avatar} className='w-[27px] h-[27px]' />
            <ThemedText className='font-bold text-lg leading-6'>Okey Boy</ThemedText>
          </View>
        </View>
        <View className='flex-row gap-4 justify-center'>
          <AntDesign name="search1" size={24} color="#9CA3AF" />
          <FontAwesome5 name="bell" size={24} color="#9CA3AF" />
        </View>
      </View>
      <View className='flex-row justify-left mt-4 gap-2 pb-4'>
        <Button
          mode="contained"
          textColor={colorScheme === "light" ? "#761022" : "#9CA3AF"}
          buttonColor={colorScheme === "light" ? "#F9FAFB" : "bg-none"}
          className={`rounded-lg py-2 px-[8px] font-medium text-xs leading-4 min-w-[113px] border ${colorScheme === "light" ? "border-none" : "border-gray-500"}`}
        >Your Communities</Button>
        <Button
          icon='plus'
          mode="contained"
          textColor="#9CA3AF"
          buttonColor={colorScheme === "light" ? "#F9FAFB" : "bg-none"}
          className={`rounded-lg py-2 px-[8px] font-medium text-xs leading-4 min-w-[111px] border ${colorScheme === "light" ? "border-none" : "border-gray-500"}`}
          onPress={async () => {
            router.push('/create-community')
          }}
        >Create New</Button>
      </View>
      <View style={{ height: screenHeight }}>
        <CommunityList />
      </View>
    </ThemedView>
  );
}
