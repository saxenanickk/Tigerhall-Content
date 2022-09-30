import {StyleSheet} from 'react-native';
import {Colors, wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_TEAL,
  },
  listContentContainerStyle: {
    width: '100%',
    paddingHorizontal: wScale(20),
  },
});

export {styles};
