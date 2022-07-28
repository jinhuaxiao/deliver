import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCars from './RestaurantCars'

const FetureRow = ({title,description,featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray-500 px-4">
            {description}
        </Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        >
            {/* RestaurantCars */}
            <RestaurantCars 
                id={123}
                imgUrl="https://picsum.photos/200/300"
                title="Yo! sush!"
                rating="4.5"
                genre="Italian"
                address="123 Main St"
                short_description="test description"
                dishes={[]}
                long={20}
                lat={0}
            />


            <RestaurantCars 
                id={123}
                imgUrl="https://picsum.photos/200/300"
                title="Yo! sush!"
                rating="4.5"
                genre="Italian"
                address="123 Main St"
                short_description="test description"
                dishes={[]}
                long={20}
                lat={0}
            />


            <RestaurantCars 
                id={123}
                imgUrl="https://picsum.photos/200/300"
                title="Yo! sush!"
                rating="4.5"
                genre="Italian"
                address="123 Main St"
                short_description="test description"
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurantCars 
                id={123}
                imgUrl="https://picsum.photos/200/300"
                title="Yo! sush!"
                rating="4.5"
                genre="Italian"
                address="123 Main St"
                short_description="test description"
                dishes={[]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  )
}

export default FetureRow