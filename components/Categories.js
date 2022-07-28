import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal: 20,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* categoryCard*/}
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test card"/>
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test2 card"/>
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test3 card"/>
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test3 card"/>
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test3 card"/>
      <CategoryCard  imgUrl = "https://picsum.photos/200/300" title="test3 card"/>

    </ScrollView>
  )
}

export default Categories