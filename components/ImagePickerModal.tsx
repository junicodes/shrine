import React, { useState } from 'react'
import { View, Modal, StyleSheet, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { TabBarIcon } from './navigation/TabBarIcon';
import * as ImagePicker from 'expo-image-picker';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    onImageSelect: (imageUri: string) => void;
}

const ImagePickerModal = ({ visible, onClose, onImageSelect }: ModalProps) => {
    const [image, setIMage] = useState('');
    const imageCameraUpload = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync();
            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
            if (!result.canceled && result.assets && result.assets.length > 0) {
                // await saveImage(result.assets[0].uri)
                const imageUri = result.assets[0].uri;
                onImageSelect(imageUri);
            }
        } catch (error) {
            alert(`Error uploading image: ${error}`)
            onClose();
        }
    }

    const saveImage = async (image: string) => {
        try {
            setIMage(image);
            onClose();
        } catch (error) {
            throw error;
        }
    }

    return (
        <Modal visible={visible} transparent={true} animationType='fade'>
            <View style={styles.paperWeight} className='justify-center items-center'>
                <View className='bg-white p-3 rounded-xl'>
                    <Text className='font-bold text-xl leading-7'>Profile Photo</Text>
                    <View className='flex-row space-x-5 mt-4'>
                        <View className='flex-row'>
                            <TouchableOpacity onPress={imageCameraUpload}>
                                <TabBarIcon name='camera-outline' color='#111827' size={25} className='mx-auto' />
                                <Text className='mt-2'>Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row justify-between'>
                            <TouchableOpacity onPress={onClose}>
                                <TabBarIcon name='image-outline' color='#111827' size={25} className='mx-auto font-bold' />
                                <Text className='mt-2'>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ImagePickerModal;

const styles = StyleSheet.create({
    paperWeight: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})