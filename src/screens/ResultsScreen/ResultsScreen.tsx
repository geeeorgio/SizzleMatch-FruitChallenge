import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const formatLevel = (gameMode: string, level: number) => {
    const modeCapitalized =
      gameMode.charAt(0).toUpperCase() + gameMode.slice(1);
    return `${modeCapitalized} — L${level}`;
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <View style={styles.header}>
          <CustomText extraStyle={styles.title}>Game Results</CustomText>
          <Pressable onPress={handleBack}>
            <Image source={GAME_ITEMS.close} style={styles.closeButton} />
          </Pressable>
        </View>

        {results.length === 0 ? (
          <View style={styles.emptyContainer}>
            <CustomText extraStyle={styles.emptyText}>
              No records yet. Play a game to see your results here.
            </CustomText>
          </View>
        ) : (
          <ScrollView style={styles.resultsContainer}>
            <View style={styles.tableHeader}>
              <CustomText extraStyle={styles.headerText}>Level</CustomText>
              <CustomText extraStyle={styles.headerText}>Date</CustomText>
              <CustomText extraStyle={styles.headerText}>Time</CustomText>
            </View>
            {results.map((result, index) => (
              <View key={index} style={styles.resultRow}>
                <View style={styles.resultCell}>
                  <CustomText extraStyle={styles.resultText}>
                    {formatLevel(result.gameMode, result.level)}
                  </CustomText>
                </View>
                <View style={styles.resultCell}>
                  <CustomText extraStyle={styles.resultText}>
                    {formatDate(result.date)}
                  </CustomText>
                </View>
                <View style={styles.resultCell}>
                  <CustomText
                    extraStyle={[
                      styles.resultText,
                      result.status === 'completed'
                        ? styles.resultTextSuccess
                        : styles.resultTextFailed,
                    ]}
                  >
                    {formatTime(result.time)}
                  </CustomText>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        {results.length > 0 && (
          <CustomButton
            variant="yellow"
            handlePress={handleClear}
            buttonStyle={styles.clearButton}
            extraContainerStyle={styles.clearButtonContainer}
          >
            <CustomText extraStyle={styles.clearButtonText}>Clear</CustomText>
          </CustomButton>
        )}

        <Modal
          visible={showClearDialog}
          transparent
          animationType="fade"
          onRequestClose={handleCancelClear}
        >
          <View style={styles.dialogOverlay}>
            <View style={styles.dialogContainer}>
              <CustomText extraStyle={styles.dialogTitle}>
                Are you sure you want to delete all records?
              </CustomText>
              <CustomText extraStyle={styles.dialogMessage}>
                This action cannot be undone.
              </CustomText>
              <View style={styles.dialogButtons}>
                <CustomButton
                  variant="red"
                  handlePress={handleConfirmClear}
                  buttonStyle={styles.dialogButton}
                >
                  <CustomText extraStyle={styles.dialogButtonText}>
                    Confirm
                  </CustomText>
                </CustomButton>
                <CustomButton
                  variant="green"
                  handlePress={handleCancelClear}
                  buttonStyle={styles.dialogButton}
                >
                  <CustomText extraStyle={styles.dialogButtonText}>
                    Cancel
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </View>
        </Modal>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default ResultsScreen;
