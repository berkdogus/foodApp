import {StyleSheet, Dimensions} from 'react-native';

const MealDetailCss = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  text: {
    fontSize: 35,
    color: 'red',
    marginLeft: 10,
  },
  area: {
    fontSize: 25,
    color: 'red',
    marginLeft: 10,
  },
  detail: {
    fontSize: 20,
    padding: 10,
  },
  utubeButton: {
   
  },
});

export default MealDetailCss;
