import React, { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { ThemedView } from "@/components/ThemedView";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { detailsCarousel } from "@/components/shared/dummyData";
import Swiper from "react-native-swiper";
import { ThemedText } from "@/components/ThemedText";
import { colors, sizes } from "@/components/shared/dummyData";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { offlineImage } from "@/constants/images";
import ProductsList from "@/components/ProductsList";
import ProfileDetail from "@/components/shared/ProfileDetail";

const DetailsPage = () => {
  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const router = useRouter();

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
    <ThemedView className={`p-2 flex-1`}>
      <PageHeader title="Details" headerShown goBackUrl={`/event-details`} />
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
            dotColor="#76102233"
            activeDotColor="#761022"
          >
            {detailsCarousel.map((item, index) => (
              <View className={`w-11/12 mx-auto mt-5`} key={index}>
                <Image source={item.uri} className={`w-full`} />
              </View>
            ))}
          </Swiper>
        </View>
        <View className={`mt-10 px-4`}>
          <ThemedText
            className={`font-bold text-[20px] leading-7 text-grey_900`}
          >
            AIRism Short Sleeve Ultra Stretch Crop
          </ThemedText>
          <View className={`mt-5 flex-row justify-between items-center`}>
            <ThemedText className="font-medium text-[20px] leading-7 text-grey_500">
              $12.63
            </ThemedText>
            <View
              className={`flex-row gap-3 rounded-[20px] items-center pb-3 bg-grey_100 w-[108px] h-[40px] justify-center pr-3`}
            >
              <TouchableOpacity
                onPress={decrement}
                className={`bg-white w-[32px] h-[32px] rounded-[25px]`}
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
                className={`bg-white w-[32px] h-[32px] rounded-[25px]`}
              >
                <ThemedText
                  className={`font-bold text-lg text-center text-primary_900`}
                >
                  +
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className={`mt-5 px-4`}>
          <ThemedText
            className={`font-normal text-base leading-6 text-grey_700`}
          >
            Description
          </ThemedText>
          <ThemedText className="mt-3 font-normal text-sm leading-5 text-grey_500">
            Women's T-shirt from comfortable 'AIRism' material. The silhouette
            fits well and feels flexible for easy movement.
          </ThemedText>
          <View className={`h-[1px] bg-grey_200 mt-4 w-[98%] mx-auto`}></View>
        </View>
        <View className={`mt-5 px-4`}>
          <ThemedText
            className={`font-normal text-base leading-5 text-grey_700 ml-1`}
          >
            Colour
          </ThemedText>
          <View className={`flex-row gap-2 mt-3`}>
            <FlatList
              data={colors}
              horizontal
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedColor(item)}
                  style={{ backgroundColor: item }}
                  className={`!w-[30px] mx-2 !h-[30px] rounded-[56px] ${selectedColor === item && `border border-black`
                    }`}
                />
              )}
            />
          </View>
        </View>
        <View className={`mt-6 px-4`}>
          <ThemedText
            className={`font-normal text-base leading-5 text-grey_700 ml-1`}
          >
            Size
          </ThemedText>
          <View className={`flex-row gap-2 mt-3`}>
            <FlatList
              data={sizes}
              horizontal
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedSize(item)}
                  className={`w-[30px] mx-2 h-[30px] flex justify-center items-center rounded-[56px] bg-white border border-grey_200 ${selectedSize === item && `border border-black`
                    }`}
                >
                  <ThemedText className="font-normal text-sm leading-5 text-grey_900">
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View className={`mt-8 px-2`}>
          <ThemedText className={`font-normal text-sm leading-4 text-grey_900 mb-7`}>Seller</ThemedText>
          <ProfileDetail />
        </View>
        <View className={`mt-8 px-2`}>
          <ThemedText className={`font-normal text-sm leading-4 text-grey_900 mb-7`}>More from seller</ThemedText>
          <View className={``}>
            <ProductsList />
          </View>
        </View>
        <View className={`flex-row justify-center gap-2`}>
          <Button
            className={`rounded-xl h-14 justify-center mt-6`}
            mode="contained"
            textColor="white"
            labelStyle={{ fontSize: 16, width: 130 }}
            buttonColor="#7f1d1d"
            rippleColor="#7F1D1D7A"
            onPress={() => router.push(`/checkout`)}
          >
            Buy Now
          </Button>
          <Button
            className={`rounded-xl h-14 justify-center mt-6`}
            mode="contained"
            textColor="#7f1d1d"
            labelStyle={{ fontSize: 16, width: 130 }}
            buttonColor="#F1E7E9"
            rippleColor="#7F1D1D7A"
          >
            Make Offer
          </Button>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default DetailsPage;
