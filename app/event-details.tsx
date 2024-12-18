import EventsInfoDate from "@/components/EventsInfoDate";
import { eventDetailsCarousel } from "@/components/shared/dummyData";
import PageHeader from "@/components/shared/PageHeader";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React, { useState } from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useColorScheme } from "nativewind";
import Events from "@/components/Events";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { BottomSheet } from "@rneui/themed";


const EventDetails = () => {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const router = useRouter();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    if (count < 0) {
      return;
    }
  };


  return (
    <ThemedView className={`flex-1 px-2`}>
      <PageHeader title="Details" headerShown goBackUrl={`/(tabs)`} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className={`h-[252px]`}>
          <Swiper
            autoplay={true}
            autoplayTimeout={3}
            showsPagination={true}
            loop={true}
            paginationStyle={{ bottom: -20 }}
            dotColor="#F5F4FE"
            activeDotColor="#8F5FED"
          >
            {eventDetailsCarousel.map((item, index) => (
              <View className={`w-11/12 mx-auto mt-5`} key={index}>
                <Image source={item.uri} className={`w-full rounded-lg`} />
              </View>
            ))}
          </Swiper>
        </View>
        <View className={`mt-6 px-2`}>
          <ThemedText
            className={`font-bold text-lg leading-6 text-grey_900 mb-3`}
          >
            La Vida Loca Concert
          </ThemedText>
          <View className={`flex-row gap-3 items-center`}>
            <TouchableOpacity
              className={`w-[55px] h-7 rounded-md border border-primary_900 py-[6px] px-[10px]`}
            >
              <ThemedText
                className={`font-bold text-[10px] leading-[11.93px] text-primary_900`}
              >
                Music
              </ThemedText>
            </TouchableOpacity>
            <Image
              source={offlineImage.group_profile}
              className={`w-[100px] h-7`}
            />
            <ThemedText
              className={`font-medium text-grey_500 text-sm leading-5`}
            >
              20,000+ going
            </ThemedText>
            <TouchableOpacity>
              <Image source={offlineImage.right_arrow} className={`w-5 h-5`} />
            </TouchableOpacity>
          </View>
          <View className={`h-[2px] bg-grey_200 w-[328px] mt-6`}></View>
        </View>
        <View className={`mt-2`}>
          <EventsInfoDate />
        </View>
        <View className={`mt-4 px-2`}>
          <ThemedText
            className={`font-normal text-sm leading-4 mb-6 ${colorScheme === "dark" ? "text-white" : "text-grey_900"
              }`}
          >
            Organizer
          </ThemedText>
          <View
            className={`rounded-lg flex-row items-center gap-4 py-2 border border-grey_200 ml-1`}
          >
            <Image
              source={offlineImage.online_user}
              className={`w-[36px] h-[36px] my-auto`}
            />
            <View className={`h-full`}>
              <View className={`flex-row items-center gap-2`}>
                <ThemedText className="font-medium text-base leading-6 text-grey_900">
                  Okechukwu Benjor
                </ThemedText>
                <Image
                  source={offlineImage.verify_badge}
                  className={`w-3 h-3`}
                />
              </View>
              <View className={`flex-row items-center gap-2`}>
                <Image source={offlineImage.location} className={`w-3 h-3`} />
                <ThemedText className="font-medium text-xs leading-4 text-grey_500">
                  Adelaide, Australia
                </ThemedText>
              </View>
            </View>
          </View>
        </View>
        <View className={`px-2 mt-5`}>
          <ThemedText
            className={`font-normal text-sm leading-4 ${colorScheme === "dark" ? "text-white" : "text-grey_900"
              }`}
          >
            About Event
          </ThemedText>
          <ThemedText
            className={`font-normal text-sm leading-5 ${colorScheme === "dark" ? "text-white" : "text-grey_500"
              }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            Read more...
          </ThemedText>
        </View>
        <View className={`mt-5 px-2`}>
          <ThemedText
            className={`font-normal mb-3 text-sm leading-4 ${colorScheme === "dark" ? "text-white" : "text-grey_900"
              }`}
          >
            More events like this
          </ThemedText>
          <Events />
          <Button
            className={`rounded-xl h-14 justify-center mt-6`}
            mode="contained"
            textColor="#ffffff"
            labelStyle={{ fontSize: 16, width: 130, marginTop: 6 }}
            buttonColor="#8F5FED"
            rippleColor="#8F5FED"
            onPress={toggleModal}
          >
            Buy Ticket
          </Button>
        </View>
      </ScrollView>
      <BottomSheet isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <ThemedView className={`rounded-tl-[32px] rounded-tr-[32px] h-[330px]`}>
          <ThemedText
            className={`text-xl ml-4 leading-7 font-bold mb-5 ${colorScheme === "dark" ? "text-white" : "text-grey_900"
              }`}
          >
            Number of seats
          </ThemedText>
          <View
            className={`flex-row justify-between gap-3 rounded-[35.74px] items-center pb-3 bg-grey_100 w-[325px] mx-auto h-[71x] px-3 mt-3`}
          >
            <TouchableOpacity
              onPress={decrement}
              className={`bg-white w-[35.74px] h-[35.74px] rounded-[25px]`}
            >
              <ThemedText
                className={`font-bold text-lg text-center text-primary_900`}
              >
                -
              </ThemedText>
            </TouchableOpacity>
            <ThemedText className="font-normal text-sm leading-5 text-grey_900">
              {count}
            </ThemedText>
            <TouchableOpacity
              onPress={increment}
              className={`bg-white w-[35.74px] h-[35.74px] rounded-[25px]`}
            >
              <ThemedText
                className={`font-bold text-lg text-center text-primary_900`}
              >
                +
              </ThemedText>
            </TouchableOpacity>
          </View>
          <Button
            className={`rounded-xl h-14 justify-center mt-auto mb-3`}
            mode="text"
            textColor="#ffffff"
            labelStyle={{ fontSize: 16, width: 327, marginTop: 6, }}
            buttonColor="#8F5FED"
            rippleColor="#8F5FED"
            onPress={() => {
              toggleModal();
              router.push(`/book-event`);
            }}
          >
            Continue - $50.00
          </Button>
        </ThemedView>
      </BottomSheet>
    </ThemedView>
  );
};

export default EventDetails;
