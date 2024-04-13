import {StyleSheet} from 'react-native';
import {colorPrimary, textWhite} from '../consts/colors';

export const style = StyleSheet.create({
  container: {
    margin: 16,
  },

  text: {
    color: textWhite,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colorPrimary,
    borderRadius: 16,
  },
});
