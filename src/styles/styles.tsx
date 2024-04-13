import {StyleSheet} from 'react-native';
import {colorPrimary, textWhite} from '../consts/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colorPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerMenu: {
    flexDirection: 'row',
    gap: 16,
  },
  p: {fontSize: 16, color: '#000'},
  textWhite: {fontSize: 16, color: textWhite},
});
