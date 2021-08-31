import React from 'react';
import {View, FlatList} from 'react-native';

import useFetch from '../../hooks/useFetch';

import Config from 'react-native-config';

import ListDetails from '../../components/ListDetails';

const Details = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/filter.php?c=${strCategory}`,
  );

  const handleSelectedMeal = idMeal => {
    navigation.navigate('MealsScreen', {idMeal});
  };
  const renderDetailItem = ({item}) => (
    <ListDetails
      meal={item}
      onSelectedMeal={() => handleSelectedMeal(item.idMeal)}
    />
  );

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetailItem} />
    </View>
  );
};

export default Details;
