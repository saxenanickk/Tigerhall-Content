import {StyleSheet} from 'react-native';
import {wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001315',
  },
  listContentContainerStyle: {
    width: '100%',
    paddingHorizontal: wScale(20),
  },
});

export {styles};
