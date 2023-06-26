import React from 'react';

import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const ScrollViewCom = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        indicatorStyle={'default'}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}>
        <Text style={{ color: 'gray', fontSize: 40, flexWrap: 'wrap' }}>
          i am ScrollView
        </Text>
        <Text style={{ color: 'pink', fontSize: 30 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ScrollViewCom;
