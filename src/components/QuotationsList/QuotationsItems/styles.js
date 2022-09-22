import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  MainContent: {
    width: '95%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginLeft: '3%',
    backgroundColor: '#000000',
    marginBottom: 15,
    borderRadius: 10,
  },
  contextLeft: {
    // width: '36%',
    height: '100%',
    alignItems: 'flex-start',
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBitcoin: {
    width: 40,
    height: 40,
  },
  dayCotation: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contextRight: {
    // width: '60%',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: '#FFB600',
    color: '#F6921E',
  },
})

export default styles