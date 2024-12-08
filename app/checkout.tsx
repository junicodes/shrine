import React, { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { ThemedView } from "@/components/ThemedView";
import {
    View,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { offlineImage } from "@/constants/images";
import { ThemedText } from "@/components/ThemedText";
import { Button, RadioButton } from "react-native-paper";
import SVGPlus from "@/components/svg/SVGPlus";
import { useRouter } from "expo-router";

const Checkout = () => {
    const [checked, setChecked] = useState("paypal");
    const router = useRouter();

    return (
        <ThemedView className={`px-2 flex-1`}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <PageHeader title="Checkout" goBackUrl={`/details`} />
                <View
                    className={`bg-gret_50 px-2 rounded-xl p-4 flex-row items-center justify-between relative`}
                >
                    <Image
                        source={offlineImage.shoes}
                        className={`w-[34.78px] h-[48px]`}
                    />
                    <View>
                        <ThemedText
                            className={`font-normal text-sm leading-5 text-grey_900`}
                        >
                            Alrism short sleeve ultra...
                        </ThemedText>
                        <View className={`flex-row justify-between`}>
                            <ThemedText
                                className={`font-medium text-[10px] leading-4 text-other_8b`}
                            >
                                Size:S
                            </ThemedText>
                            <View className={`flex-row gap-1 items-center`}>
                                <ThemedText
                                    className={`font-medium text-[10px] leading-4 text-other_8b`}
                                >
                                    Colour
                                </ThemedText>
                                <View className={`w-3 h-3 bg-grey_900 rounded-full`}></View>
                            </View>
                        </View>
                    </View>
                    <ThemedText className={`font-bold text-sm leading-5 text-grey_900`}>
                        $500.00
                    </ThemedText>
                </View>
                <View className={`mt-6`}>
                    <View className={`flex-row justify-between mb-8`}>
                        <ThemedText
                            className={`font-normal text-sm leading-4 text-grey_900`}
                        >
                            Delivery Address
                        </ThemedText>
                        <ThemedText
                            className={`font-normal text-sm leading-4 underline text-primary_900`}
                        >
                            Change Address
                        </ThemedText>
                    </View>
                    <View
                        className={`bg-gret_50 rounded-xl p-4 px-2 flex-row gap-3 items-center`}
                    >
                        <Image
                            source={offlineImage.location_pin}
                            className={`w-[32.19px] h-[32.19px]`}
                        />
                        <View className={``}>
                            <ThemedText
                                className={`font-normal text-xs leading-4 text-other_95`}
                            >
                                Atlanta, Georgia
                            </ThemedText>
                            <ThemedText
                                className={`font-normal text-xs leading-4 text-grey_900`}
                            >
                                1714 Sulphur Creek Jemez Springs
                            </ThemedText>
                        </View>
                    </View>
                    <View className={`mt-5`}>
                        <ThemedText
                            className={`font-normal text-sm leading-5 text-grey_900`}
                        >
                            Order Summary
                        </ThemedText>
                        <View className={`bg-gret_50 rounded-xl p-4 px-2`}>
                            <View
                                className={`flex-row justify-between p-4 border-b border-b-grey_200`}
                            >
                                <ThemedText
                                    className={`font-normal text-xs leading-5 text-grey_500`}
                                >
                                    Sub total (2 Items)
                                </ThemedText>
                                <ThemedText
                                    className={`font-bold text-xs leading-5 text-grey_900`}
                                >
                                    $500.00
                                </ThemedText>
                            </View>
                            <View
                                className={`flex-row justify-between p-4 border-b border-b-grey_200 mt-5`}
                            >
                                <ThemedText
                                    className={`font-normal text-xs leading-5 text-grey_500`}
                                >
                                    Delivery Fee
                                </ThemedText>
                                <ThemedText
                                    className={`font-bold text-xs leading-5 text-grey_900`}
                                >
                                    $15.00
                                </ThemedText>
                            </View>
                            <View className={`flex-row justify-between p-4 mt-5`}>
                                <ThemedText
                                    className={`font-bold text-sm leading-5 text-grey_500`}
                                >
                                    Total{" "}
                                </ThemedText>
                                <ThemedText
                                    className={`font-bold text-sm leading-5 text-grey_900`}
                                >
                                    $515.00
                                </ThemedText>
                            </View>
                        </View>
                    </View>
                </View>
                <View className={`mt-4`}>
                    <ThemedText className={`font-normal text-sm leading-5 text-grey_900`}>
                        Payment Method
                    </ThemedText>
                    <View className={``}>
                        <RadioButton.Group
                            onValueChange={(newValue) => setChecked(newValue)}
                            value={checked}
                        >
                            <Pressable onPress={() => setChecked("paypal")}>
                                <View
                                    className={`mt-4 flex-row items-center justify-between border rounded-xl p-4 border-grey_200`}
                                >
                                    <View className={`flex-row items-center gap-3`}>
                                        <Image
                                            source={offlineImage.paypal}
                                            className={`w-[40px] h-[40px]`}
                                        />
                                        <ThemedText
                                            className={`font-medium text-sm leading-5 text-grey_900`}
                                        >
                                            Paypal
                                        </ThemedText>
                                    </View>
                                    <RadioButton
                                        value="conversations"
                                        uncheckedColor="#E5E7EB"
                                        color="#761022"
                                    />
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setChecked("card")}>
                                <View
                                    className={`mt-4 flex-row items-center justify-between border rounded-xl p-4 border-grey_200`}
                                >
                                    <View className={`flex-row items-center gap-3`}>
                                        <Image
                                            source={offlineImage.card}
                                            className={`w-[40px] h-[40px]`}
                                        />
                                        <View className={``}>
                                            <ThemedText
                                                className={`font-medium text-sm leading-5 text-grey_900`}
                                            >
                                                Credit/Debit Card
                                            </ThemedText>
                                            <ThemedText
                                                className={`font-normal text-xs leading-5 text-grey_500`}
                                            >
                                                **** **** **** ****
                                            </ThemedText>
                                        </View>
                                    </View>
                                    <RadioButton
                                        value="conversations"
                                        uncheckedColor="#E5E7EB"
                                        color="#761022"
                                    />
                                </View>
                            </Pressable>
                        </RadioButton.Group>
                        <TouchableOpacity className={`mt-8`}>
                            <View
                                className={`mt-4 flex-row items-center gap-2 justify-center border p-4 border-grey_200 w-full mx-auto rounded-[20px]`}
                            >
                                <SVGPlus />
                                <ThemedText
                                    className={`font-normal text-sm leading-6 text-grey_900`}
                                >
                                    Add Payment Method
                                </ThemedText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    className={`rounded-xl h-14 justify-center mt-6`}
                    mode="contained"
                    textColor="white"
                    labelStyle={{ fontSize: 16 }}
                    buttonColor="#7f1d1d"
                    rippleColor="#7F1D1D7A"
                    onPress={() => router.push(`/sellerProfile`)}
                >
                    Place Order
                </Button>
            </ScrollView>
        </ThemedView>
    );
};

export default Checkout;
