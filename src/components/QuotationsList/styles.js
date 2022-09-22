import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filters: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  buttonQuery: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D85107',
    borderRadius: 50,
  },
  textButtonQuery: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listTransactionsContainer: {
    flex: 1,
  },
})

export default styles