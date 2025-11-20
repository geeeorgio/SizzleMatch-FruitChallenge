import type { RootState } from 'src/redux/store';

export const selectIsOnboardingCompleted = (state: RootState) =>
  state.onboarding.isOnboardingCompleted;
