import { Image, StyleSheet, Platform, View, FlatList } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { offlineImage } from '@/constants/images';
import { Button } from 'react-native-paper';
import { communityDummy } from '@/utils/dummyData';
import CommunityList from '@/components/CommunityList';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.lightBg} className='bg-white px-2'>
      <ThemedView className='mt-2 flex flex-row items-center px-2' style={styles.profileView}>
        <View className=''>
          <ThemedText type='subtitle' className=' font-normal text-base leading-6'>Good morning,</ThemedText>
          <View className='flex gap-2 flex-row mt-1'>
            <Image source={offlineImage.user_avatar} className='w-[27px] h-[27px]' />
            <ThemedText className='font-bold text-lg leading-6 text-grey_900'>Okey Boy</ThemedText>
          </View>
        </View>
        <View className='flex-row gap-4 justify-center'>
          <AntDesign name="search1" size={24} color="#9CA3AF" />
          <FontAwesome5 name="bell" size={24} color="#9CA3AF" />
        </View>
      </ThemedView>
      <View className='flex-row justify-center mt-4 gap-2'>
        <Button
          mode="contained"
          textColor="#761022"
          buttonColor='#F9FAFB'
          className='rounded-lg py-2 px-[8px] font-medium text-xs leading-4 min-w-[113px]'
        >Your Communities</Button>
        <Button
          icon='plus'
          mode="contained"
          textColor="#9CA3AF"
          buttonColor='#F9FAFB'
          className='rounded-lg py-2 px-[8px] font-medium text-xs leading-4 min-w-[111px]'
          onPress={async () => {
            router.push('/createCommunity')
          }}
        >Create New</Button>
      </View>
      <ThemedView className='px-2'>
        <CommunityList />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  lightBg: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  profileView: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
