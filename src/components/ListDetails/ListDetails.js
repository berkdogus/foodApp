import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import DetailCss from './ListDetails.style';

const ListDetails = ({meal,onSelectedMeal}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelectedMeal}>
      <View style={DetailCss.container}>
        <View style={DetailCss.inlineContainer}>
          <Image style={DetailCss.image} source={{uri: meal.strMealThumb}} />

          <Text style={DetailCss.text}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListDetails;
