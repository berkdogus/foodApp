import {StyleSheet, Dimensions} from 'react-native';

const DetailCss = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  inlineContainer: {
    margin: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 5,
  },
  text: {
    backgroundColor: 'black',
    opacity: 0.8,
    color: 'white',
    fontSize: 22,
  },
});

export default DetailCss;
