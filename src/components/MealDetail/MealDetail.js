import React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';

import MealDetailCss from './MealDetail.style';

const MealDetail = ({meal}) => {
  return (
    <View style={MealDetailCss.container}>
      <Image style={MealDetailCss.image} source={{uri: meal.strMealThumb}} />
      <Text style={MealDetailCss.text}>{meal.strMeal}</Text>
      <Text style={MealDetailCss.area}>{meal.strArea}</Text>
      <Text style={MealDetailCss.detail}>{meal.strInstructions}</Text>
      <Button
        color="#FF0000"
        title="Watch on
      Youtube"
        onPress={() => {
          Linking.openURL(`${meal.strYoutube}`);
        }}
      />
    </View>
  );
};

export default MealDetail;
