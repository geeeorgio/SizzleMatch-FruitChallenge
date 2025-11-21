import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  settingsContainer: {
    flex: 1,
    gap: 16,
    marginTop: 20,
  },
  settingItem: {
    padding: 16,
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  toggle: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#666',
    minWidth: 80,
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: '#4CAF50',
  },
  toggleText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#fff',
  },
  difficultyContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    justifyContent: 'space-around',
  },
  difficultyButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#666',
    alignItems: 'center',
  },
  difficultyButtonActive: {
    backgroundColor: '#FFD700',
  },
  difficultyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  difficultyTextActive: {
    color: '#000',
  },
  shareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
  closeButton: {
    width: 24,
    height: 24,
  },
  saveButton: {
    paddingVertical: 16,
  },
  saveButtonContainer: {
    marginBottom: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
