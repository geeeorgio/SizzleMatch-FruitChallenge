import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  FrameContainer,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { clearResults } from 'src/redux/slices/results/slice';
import type { MainStackNavigationProp } from 'src/types';

const ResultsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const results = useAppSelector((state) => state.results.results);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClear = () => {
    setShowClearDialog(true);
  };

  const handleConfirmClear = () => {
    dispatch(clearResults());
    setShowClearDialog(false);
  };

  const handleCancelClear = () => {
    setShowClearDialog(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatMode = (mode: string) => {
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <Pressable
          onPress={handleBack}
          style={styles.closeWrapper}
          hitSlop={10}
        >
          <Image
            source={GAME_ITEMS.close}
            style={styles.closeButton}
            resizeMode="contain"
          />
        </Pressable>

        <CustomText extraStyle={styles.title}>Game Results</CustomText>

        {results.length === 0 ? (
          <View style={styles.emptyContainer}>
            <CustomText extraStyle={styles.emptyText}>
              No records yet. Play a game to see your results here.
            </CustomText>
          </View>
        ) : (
          <ScrollView
            style={styles.resultsContainer}
            showsVerticalScrollIndicator={false}
          >
            {results.map((result, index) => (
              <View key={index} style={styles.resultRow}>
                <CustomText extraStyle={[styles.resultText, styles.colDate]}>
                  {formatDate(result.date)}
                </CustomText>

                <CustomText extraStyle={[styles.resultText, styles.colMode]}>
                  {formatMode(result.gameMode)}
                </CustomText>

                <CustomText extraStyle={[styles.resultText, styles.colTime]}>
                  {result.time}
                </CustomText>
              </View>
            ))}
          </ScrollView>
        )}

        <CustomButton
          variant="yellow"
          handlePress={handleClear}
          extraContainerStyle={styles.clearButtonContainer}
          buttonStyle={styles.clearButton}
          isDisabled={results.length === 0}
        >
          <CustomText extraStyle={styles.clearButtonText}>Clear</CustomText>
        </CustomButton>
      </CustomContainer>

      <Modal
        visible={showClearDialog}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={handleCancelClear}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCancelClear}>
          <Pressable
            style={styles.dialogWrapper}
            onPress={(e) => e.stopPropagation()}
          >
            <FrameContainer extraStyle={styles.dialogContainer}>
              <CustomText extraStyle={styles.dialogTitle}>
                Are you sure you want to delete all records?
              </CustomText>
              <CustomText extraStyle={styles.dialogMessage}>
                This action cannot be undone.
              </CustomText>
            </FrameContainer>

            <View style={styles.dialogButtons}>
              <CustomButton
                variant="red"
                handlePress={handleConfirmClear}
                extraContainerStyle={styles.dialogBtnContainer}
                buttonStyle={styles.dialogBtn}
              >
                <CustomText extraStyle={styles.dialogBtnText}>
                  Confirm
                </CustomText>
              </CustomButton>

              <CustomButton
                variant="green"
                handlePress={handleCancelClear}
                extraContainerStyle={styles.dialogBtnContainer}
                buttonStyle={styles.dialogBtn}
              >
                <CustomText extraStyle={styles.dialogBtnText}>
                  Cancel
                </CustomText>
              </CustomButton>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </CustomScreenWrapper>
  );
};

export default ResultsScreen;
