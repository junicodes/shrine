import PageHeader from "@/components/shared/PageHeader";
import ProfileDetail from "@/components/shared/ProfileDetail";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import ProductsList from "@/components/ProductsList";
import CommunityList from "@/components/CommunityList";

const sellerProfile = () => {
    const [sellerView, setSellerView] = useState<string>("listing");
    const router = useRouter();

    return (
        <ThemedView className={`flex-1 px-3 `}>
            <PageHeader title="Seller Profile" goBackUrl={`/checkout`} />
            <View className={`px-1`}>
                <ProfileDetail />
            </View>
            <Button
                className={`rounded-xl h-14 justify-center mt-8`}
                mode="contained"
                textColor="white"
                labelStyle={{ fontSize: 16, width: 130 }}
                buttonColor="#7f1d1d"
                rippleColor="#7F1D1D7A"
            >
                Message Seller
            </Button>
            <View
                className={`bg-gret_50 py-[13px] px-[35px] mt-8 flex-row justify-between w-[98%] mx-auto relative`}
            >
                <TouchableOpacity
                    onPress={() => setSellerView("listing")}
                >
                    <ThemedText className={`text-center ${sellerView === 'listing' && 'text-primary_900 font-semibold'}`}>Listings</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSellerView("communities")}
                >
                    <ThemedText className={`text-center ${sellerView === 'communities' && 'text-primary_900 font-semibold'}`}>Communities</ThemedText>
                </TouchableOpacity>
                <View
                    className={`absolute bottom-0 h-[2px] bg-primary_900`}
                    style={{
                        width: "50%",
                        left: sellerView === "listing" ? 0 : '70%',
                    }}
                />
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
            >
                <View className={`mt-6`}>
                    {sellerView === 'listing' && (
                        <View className={`mt-4 px-3`}>
                            <ProductsList />
                        </View>
                    )}
                    {sellerView === 'communities' && (
                        <View className={`my-4 px-3`}>
                            <CommunityList />
                        </View>
                    )}
                </View>
            </ScrollView>
        </ThemedView>
    );
};

export default sellerProfile;
