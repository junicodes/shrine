import { offlineImage } from "@/constants/images";
import { Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";
import { ThemedView } from "./ThemedView";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import ImagePickerModal from "./ImagePickerModal";

const ImageProfile = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageSelect = (imageUri: string) => {
        // Update the state with the selected image URI
        setSelectedImage(imageUri);
        // Close the modal after selecting the image
        setShowModal(false);
    };

    return (
        <>
            <ThemedView className="px-2 items-center mt-6" style={styles.lightBg}>
                <TouchableOpacity className="w-[116px] h-[116px] bg-[#E5E7EB] rounded-full relative" onPress={() => setShowModal(true)}>
                    {selectedImage && <Image source={{ uri: selectedImage }} className="w-full h-full rounded-full" />}
                    <Image source={offlineImage.red_camera} className="w-[32px] h-[32px] absolute bottom-2 right-0" />
                </TouchableOpacity>
            </ThemedView>
            {showModal && <ImagePickerModal visible={showModal} onClose={() => setShowModal(false)} onImageSelect={handleImageSelect} />}
        </>
    )

}

export default ImageProfile;

const styles = StyleSheet.create({
    lightBg: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
});