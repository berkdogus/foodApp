import {StyleSheet} from 'react-native';

const ListCss = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'orange',
  },
  container: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 6,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin:10,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default ListCss;
