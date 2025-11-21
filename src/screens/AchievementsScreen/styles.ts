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
  achievementsContainer: {
    flex: 1,
    gap: 16,
    marginTop: 20,
  },
  achievementItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementItemCompleted: {
    borderWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  achievementImage: {
    width: 60,
    height: 60,
    marginRight: 16,
    opacity: 0.5,
  },
  achievementImageCompleted: {
    opacity: 1,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#999',
  },
  achievementTitleCompleted: {
    color: '#FFD700',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#ccc',
  },
});
