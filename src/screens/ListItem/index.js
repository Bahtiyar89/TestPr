import {StyleSheet, Text, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {selectedItem} from '../../../redux/events/selectors';
import styles from './styles';

const ListItem = ({route, navigation}) => {
  const item = useSelector(selectedItem);

  console.log('useRoute: ', route.name);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.itemProp}>Selected Item Properties</Text>
      <View style={styles.row}>
        <Image
          style={styles.img}
          source={{
            uri: item.avatar_url,
          }}
        />
        <View>
          <Text style={styles.name}>Name</Text>
          <Text>{item.login}</Text>
          <Text style={styles.name}>Creted Date</Text>
          <Text>{item.created_at}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListItem;
