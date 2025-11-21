import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

import { achievementsReducer } from './slices/achievements/slice';
import { gameplayReducer } from './slices/gameplay/slice';
import { onboardingReducer } from './slices/onboarding/slice';
import { resultsReducer } from './slices/results/slice';
import { settingsReducer } from './slices/settings/slice';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
};

const gameplayPersistConfig = {
  key: 'gameplay',
  storage: AsyncStorage,
};

const achievementsPersistConfig = {
  key: 'achievements',
  storage: AsyncStorage,
};

const resultsPersistConfig = {
  key: 'results',
  storage: AsyncStorage,
};

const persistedOnboardingReducer = persistReducer(
  onboardingPersistConfig,
  onboardingReducer,
);

const persistedSettingsReducer = persistReducer(
  settingsPersistConfig,
  settingsReducer,
);

const persistedGameplayReducer = persistReducer(
  gameplayPersistConfig,
  gameplayReducer,
);

const persistedAchievementsReducer = persistReducer(
  achievementsPersistConfig,
  achievementsReducer,
);

const persistedResultsReducer = persistReducer(
  resultsPersistConfig,
  resultsReducer,
);

const store = configureStore({
  reducer: {
    onboarding: persistedOnboardingReducer,
    settings: persistedSettingsReducer,
    gameplay: persistedGameplayReducer,
    achievements: persistedAchievementsReducer,
    results: persistedResultsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
