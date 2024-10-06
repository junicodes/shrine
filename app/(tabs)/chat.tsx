import Ionicons from "@expo/vector-icons/Ionicons";
import {
    Image,
    View,
    useColorScheme,
    TextInput,
    Pressable,
    Keyboard,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { offlineImage } from "@/constants/images";
import { TouchableWithoutFeedback } from "react-native";
import BanterList from "@/components/BanterList";
import { BottomSheet } from "@rneui/themed";
import { RadioButton } from "react-native-paper";

interface SearchInput {
    input: string;
}

export default function ChatScreen() {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [checked, setChecked] = useState("conversations");
    const [emptyState, setEmptyState] = useState<boolean>(true);
    const [payload, setPayload] = useState<SearchInput>({
        input: "",
    });
    const colorScheme = useColorScheme();

    // Form Submit
    const handleFormSubmit = () => { };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        setTimeout(() => {
            setEmptyState(false);
        }, 4000);
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView className="px-2 flex-1">
                <View className="flex-row justify-between items-center mt-7">
                    <ThemedText
                        className={`mx-auto font-bold text-xl leading-7 text-natural_grey_900`}
                    >
                        Chats
                    </ThemedText>
                    <TabBarIcon
                        name="add-circle-outline"
                        color={colorScheme === "light" ? "#6B7280" : "#ffffff"}
                    />
                </View>
                <View className={`mt-9`}>
                    <View className={``}>
                        <Formik
                            enableReinitialize
                            initialValues={{ ...payload } as any}
                            onSubmit={handleFormSubmit}
                        >
                            {(props: any) => (
                                <View
                                    className={`flex flex-row justify-between items-center px-3`}
                                >
                                    <View className="flex-row relative w-5/6 ml-2">
                                        <Pressable
                                            onPress={() => {
                                                console.log("I am pressed");
                                            }}
                                        >
                                            <View>
                                                <TabBarIcon
                                                    name="search-outline"
                                                    color="#97A4A9"
                                                    className="absolute left-3 top-2"
                                                />
                                            </View>
                                        </Pressable>
                                        <TextInput
                                            className="p-3 pl-11 w-full border border-[#E5E5E5] rounded-xl"
                                            placeholder="Start a message"
                                            placeholderTextColor="#ABAFB3"
                                            keyboardType="default"
                                            onChangeText={props.handleChange("chat")}
                                            value={props.values.chat}
                                            onBlur={props.handleBlur("chat")}
                                            maxLength={20}
                                        />
                                    </View>
                                    <View className="w-1/6">
                                        <Pressable onPress={toggleModal}>
                                            <View
                                                className={`bg-primary_50 w-[48px] h-[48px] ml-auto rounded-lg flex flex-row items-center justify-center`}
                                            >
                                                <Image
                                                    source={offlineImage.filter}
                                                    className={`w-[16.67px] h-[16.67px]`}
                                                />
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
                {emptyState ? (
                    <View className="mt-16">
                        <Image
                            source={offlineImage.empty}
                            className="w-full h-[200px] mx-auto"
                        />
                        <View className={`mt-6`}>
                            <ThemedText className="font-bold text-2xl leading-[32.4px] text-grey_900 text-center">
                                Empty
                            </ThemedText>
                            <ThemedText className="font-normal text-base leading-6 text-center mt-3">
                                You don't have any messages {"\n"}
                                at this time
                            </ThemedText>
                        </View>
                    </View>
                ) : (
                    <View>
                        <BanterList />
                    </View>
                )}
                <View className={`px-3 -bottom-8`}>
                    <View className={`w-full h-[1.5px] bg-grey_100 mb-8`}></View>
                    <View className="flex-row gap-3 items-center">
                        <Image
                            source={offlineImage.profile_circle}
                            className={`w-[41.98px] h-[41.98px]`}
                        />
                        <View className={``}>
                            <ThemedText
                                className={`font-medium text-sm leading-5 text-grey_900`}
                            >
                                Browse All Members
                            </ThemedText>
                            <ThemedText
                                className={`font-normal text-xs leading-4 text-grey_400`}
                            >
                                42 Members
                            </ThemedText>
                        </View>
                    </View>
                </View>
                <BottomSheet isVisible={isModalVisible} onBackdropPress={toggleModal}>
                    <ThemedView
                        className={`bg-white rounded-tl-[32px] rounded-tr-[32px] h-[428px]`}
                    >
                        <View className="flex-row justify-between items-center pb-7 border-b border-b-grey_200">
                            <ThemedText className="font-bold text-base leading-6 text-grey_900">
                                Sort
                            </ThemedText>
                            <Pressable onPress={toggleModal}>
                                <TabBarIcon
                                    name="close"
                                    color="#9CA3AF"
                                    className="w-[20px] h-[20px]"
                                />
                            </Pressable>
                        </View>
                        <ThemedView className={`px-0 mt-6`}>
                            <RadioButton.Group
                                onValueChange={(newValue) => setChecked(newValue)}
                                value={checked}
                            >
                                <Pressable onPress={() => setChecked('conversations')}>
                                    <View
                                        className={`mt-4 flex-row items-center justify-between border rounded-xl p-4 ${checked === 'conversations'
                                            ? "border border-primary_900 bg-primary_50"
                                            : "border-grey_200 "
                                            }`}
                                    >
                                        <ThemedText
                                            className={`font-medium text-sm leading-5 text-grey_900 ${checked === 'conversations' && "text-primary_900"
                                                }`}
                                        >
                                            All Conversations
                                        </ThemedText>
                                        <RadioButton
                                            value="conversations"
                                            uncheckedColor="#E5E7EB"
                                            color="#761022"
                                        />
                                    </View>
                                </Pressable>

                                <Pressable onPress={() => setChecked('read')}>
                                    <View
                                        className={`mt-4 flex-row items-center justify-between border border-grey_200 rounded-xl p-4 ${checked === "read" &&
                                            "border border-primary_900 bg-primary_50"
                                            }`}
                                    >
                                        <ThemedText
                                            className={`font-medium text-sm leading-5 text-grey_900 ${checked === "read" && "text-primary_900"
                                                }`}
                                        >
                                            Already Read
                                        </ThemedText>
                                        <RadioButton
                                            value="read"
                                            uncheckedColor="#E5E7EB"
                                            color="#761022"
                                        />
                                    </View>
                                </Pressable>

                                <Pressable onPress={() => setChecked('unread')}>
                                    <View
                                        className={`mt-4 flex-row items-center justify-between border rounded-xl p-4 ${checked === "unread" ?
                                            "border border-primary_900 bg-primary_50"
                                            : 'border-grey_200'}`}
                                    >
                                        <ThemedText
                                            className={`font-medium text-sm leading-5 text-grey_900 ${checked === "unread" && "text-primary_900"
                                                }`}
                                        >
                                            Unread
                                        </ThemedText>
                                        <RadioButton
                                            value="unread"
                                            uncheckedColor="#E5E7EB"
                                            color="#761022"
                                        />
                                    </View>
                                </Pressable>
                            </RadioButton.Group>
                        </ThemedView>
                    </ThemedView>
                </BottomSheet>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
}
