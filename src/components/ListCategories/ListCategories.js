import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback,Alert} from 'react-native';

import ListCss from './ListCategories.style';

const ListCategories = ({category,onMealSelect}) => {    

   

  return (
    <TouchableWithoutFeedback onPress={onMealSelect}>
      <View style={ListCss.mainContainer}>
        <View style={ListCss.container}>
          <Image
            style={ListCss.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={ListCss.text}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListCategories;
