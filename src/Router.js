import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={Details}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
