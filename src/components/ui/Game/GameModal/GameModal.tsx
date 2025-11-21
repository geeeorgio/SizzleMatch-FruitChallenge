import React from 'react';
import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';
import FrameContainer from '../../FrameContainer/FrameContainer';

import { styles } from './styles';

interface GameModalProps {
  isVisible: boolean;
  onResume: () => void;
  onQuitGame: () => void;
}

const GameModal = ({ isVisible, onResume, onQuitGame }: GameModalProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onResume}
    >
      <Pressable style={styles.overlay} onPress={onResume}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={styles.dialogWrapper}
        >
          <FrameContainer extraStyle={styles.dialog}>
            <CustomText extraStyle={styles.title}>
              Are you sure you want to quit the game?
            </CustomText>
            <CustomText extraStyle={styles.message}>
              Your progress for this round will be lost.
            </CustomText>
          </FrameContainer>

          <View style={styles.buttonsContainer}>
            <CustomButton
              handlePress={onQuitGame}
              buttonStyle={styles.button}
              extraContainerStyle={styles.buttonContainer}
              variant="red"
            >
              <CustomText extraStyle={styles.btnText}>Confirm</CustomText>
            </CustomButton>

            <CustomButton
              handlePress={onResume}
              buttonStyle={styles.button}
              extraContainerStyle={styles.buttonContainer}
              variant="green"
            >
              <CustomText extraStyle={styles.btnText}>Cancel</CustomText>
            </CustomButton>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default GameModal;
