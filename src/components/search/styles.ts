import {Platform, StyleSheet} from 'react-native';
import {Colors, hScale, wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {margin: wScale(20), marginVertical: hScale(14)},
  input: {
    fontFamily: Platform.select({ios: 'Avenir', android: 'Robot'}),
    fontSize: hScale(14),
    backgroundColor: Colors.TEAL,
    height: hScale(49),
    color: Colors.WHITE,
    borderRadius: wScale(5),
    alignItems: 'center',
    paddingHorizontal: wScale(8),
  },
});

export {styles};
