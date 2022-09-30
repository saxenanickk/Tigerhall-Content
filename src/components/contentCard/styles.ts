import {StyleSheet} from 'react-native';
import {hScale, wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {borderWidth: 1, width: '100%', borderRadius: 5},
  image: {
    width: '100%',
    height: hScale(130),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: wScale(5),
    borderBottomRightRadius: wScale(5),
    padding: wScale(12),
    paddingBottom: hScale(32),
  },
});

export {styles};
