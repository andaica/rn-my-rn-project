import { StyleSheet } from 'react-native';

//default color by design
export const commonColor = {
  black: '#000000',
  blue: '#0000FF',
  gray: '#808080',
  green: '#008000',
  yellow: '#FFFF00',
  orange: '#FFA500',
  red: '#FF0000'
}

export const commonStyles: any = StyleSheet.create({
  fullBackgroundImage: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%'
  }
})