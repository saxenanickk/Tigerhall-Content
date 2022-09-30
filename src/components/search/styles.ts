import {Platform, StyleSheet} from 'react-native';
import {hScale, wScale} from '../../utils';

const styles = StyleSheet.create({
  input: {
    fontFamily: Platform.select({ios: 'Avenir', android: 'Robot'}),
    backgroundColor: '#003238',
    height: hScale(49),
    color: '#FFFFFF',
    borderRadius: wScale(5),
    alignItems: 'center',
    paddingHorizontal: wScale(8),
  },
});

export {styles};
