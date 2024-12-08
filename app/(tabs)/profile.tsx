import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React from "react";
import {
  View,
  Text,
  Image,
  useColorScheme,
  Pressable,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { Href, router } from "expo-router";
import { Button } from "react-native-paper";

interface MenuList {
  title: string;
  uri: Href;
  image: ImageSourcePropType;
}

const Profile = () => {
  const color = useColorScheme();

  const menuList: MenuList[] = [
    {
      title: "Orders",
      uri: "/",
      image: offlineImage.orders_trolley,
    },
    {
      title: "Active Listings",
      uri: "/",
      image: offlineImage.active_listing,
    },
    {
      title: "Communities",
      uri: "/",
      image: offlineImage.communities,
    },
    {
      title: "Add Payment Method",
      uri: "/",
      image: offlineImage.payment_method,
    },
    {
      title: "Change Password",
      uri: "/",
      image: offlineImage.change_password,
    },
    {
      title: "Terms and Conditions",
      uri: "/",
      image: offlineImage.t_and_c,
    },
  ];

  return (
    <ThemedView className="flex-1 px-3">
      <ThemedText className={`font-bold text-xl leading-7 mt-4`}>
        Profile
      </ThemedText>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className={`mt-4`}>
          <View
            className={`rounded-lg flex-row items-center gap-4 w-full py-2`}
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
          <ThemedText
            className={`font-normal text-sm leading-5 text-grey_500 w-[372px] mt-3`}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </ThemedText>
          <Button
            className={`rounded-xl h-14 justify-center mt-6`}
            mode="contained"
            textColor="white"
            labelStyle={{ fontSize: 16, width: 160 }}
            buttonColor="#7f1d1d"
            rippleColor="#7F1D1D7A"
            onPress={() => router.push(`/account`)}
          >
            Edit Profile
          </Button>
        </View>
        {menuList.map((x) => (
          <Pressable
            key={Math.random() + x.title + "menu-list"}
            onPress={() => router.push(x.uri)}
          >
            <View className={`mt-8 px-2 flex-row justify-between items-center`}>
              <View className={`flex-row gap-3 items-center`}>
                <View
                  className={`w-[40px] h-[40px] rounded-full bg-primary_50 justify-center items-center`}
                >
                  <Image source={x.image} className={`w-[40px] h-[40px]`} />
                </View>
                <ThemedText className={`font-medium text-base leading-6`}>
                  {x.title}
                </ThemedText>
              </View>
              <TabBarIcon
                name="chevron-forward"
                color={color === "dark" ? "#ffffff" : "#9CA3AF"}
              />
            </View>
          </Pressable>
        ))}
        <View className={`mt-4`}>
          <Pressable>
            <View className={`mt-4 px-2 flex-row justify-between items-center`}>
              <View className={`flex-row gap-3 items-center`}>
                <View
                  className={`w-[40px] h-[40px] rounded-full bg-primary_50 justify-center items-center`}
                >
                  <Image
                    source={offlineImage.new_logout}
                    className={`w-[40px] h-[40px]`}
                  />
                </View>
                <ThemedText
                  className={`font-medium text-base leading-6 text-others_red`}
                >
                  Logout
                </ThemedText>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default Profile;
