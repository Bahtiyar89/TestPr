import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  flatList: {flexDirection: 'row', paddingTop: 10},
  img: {
    width: 50,
    height: 50,
  },
  countStyle: bool => ({
    marginTop: 20,
    padding: 10,
    backgroundColor: bool ? 'blue' : 'grey',
    width: 100,
    borderRadius: 10,
  }),
  refetchStyle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
