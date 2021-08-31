import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Config from 'react-native-config';
import ListCategories from '../../components/ListCategories';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(`${Config.API_URL}/categories.php`);

  const handleMealSelect = strCategory => {
    navigation.navigate('DetailsScreen', {strCategory});
  };

  const renderCategory = ({item}) => (
    <ListCategories category={item} onMealSelect={() => handleMealSelect(item.strCategory)} />
  );
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (error) {
    return (
      <View>
        <Text>ERROR</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Categories;
