import React from 'react';
import Modal from 'react-native-modal';

interface IBottomSheet {
    isModalVisible: boolean;
    toggleModal: () => void;
    children: React.ReactNode;
}

const CustomBottomSheet = ({ isModalVisible, toggleModal, children }: IBottomSheet) => {
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            swipeDirection='down'
            onSwipeComplete={toggleModal}
        >
            {children}
        </Modal>
    )
}

export default CustomBottomSheet;