import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  itemProp: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {flexDirection: 'row', justifyContent: 'space-around'},
  img: {
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
