import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
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
  closeButton: {
    width: 24,
    height: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
  },
  resultsContainer: {
    flex: 1,
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultCell: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
  resultTextSuccess: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  resultTextFailed: {
    color: '#f44336',
    fontWeight: '600',
  },
  clearButton: {
    paddingVertical: 12,
    marginTop: 16,
  },
  clearButtonContainer: {
    marginBottom: 20,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dialogOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 24,
    minWidth: 300,
    borderWidth: 2,
    borderColor: '#FF6B00',
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  dialogMessage: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 24,
  },
  dialogButtons: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  dialogButton: {
    flex: 1,
    paddingVertical: 12,
  },
  dialogButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
