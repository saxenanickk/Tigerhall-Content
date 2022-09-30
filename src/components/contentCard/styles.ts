import {StyleSheet} from 'react-native';
import {Colors, hScale, wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: wScale(5),
  },
  image: {
    width: '100%',
    height: hScale(130),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  content: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: wScale(5),
    borderBottomRightRadius: wScale(5),
    padding: wScale(12),
    paddingBottom: hScale(32),
  },
});

export {styles};
