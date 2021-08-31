import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import MealDetail from '../../components/MealDetail';

const Meals = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}lookup.php?i=${idMeal}`,
  );

  const renderMeal = ({item}) => <MealDetail meal={item} />;
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
