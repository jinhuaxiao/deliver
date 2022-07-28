import { View, Text,Image,SafeAreaView,TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
    ChevronDownIcon,
} from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native-web';
import Feed from '../components/Feed';
import Categories from '../components/categories';
import FetureRow from '../components/FetureRow';


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'testing',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white pt-5">

        {/* Header*/}
        <View className="flex flex-row items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1 flex-grow ">
            <Text className="font-bold text-gray-400 text-xs">
              deliver now!
            </Text>

            <Text className="font-bold text-xl">
              current location 
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search*/}
        <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 flex-grow space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput 
            placeholder='Restaurants and cuisines' 
            keyboardType='default'
            />

          </View>
          <AdjustmentsIcon color="#00CCBB" />

        </View>
        {/* Body*/}
        <ScrollView className="bg-gray-100">
          {/* categories */}
          <Categories />

          {/* Featured Rows */}
          <FetureRow 
          id="1"
          title="Featured"
          description="Discover the best restaurants in your area"
          featuredCategory="Restaurants"
          />


          <FetureRow 
          id="2"
          title="Tasty Discounts"
          description="Discover the best restaurants in your area"
          featuredCategory="Restaurants"
          />


          <FetureRow 
          id="3"
          title="awesome deals"
          description="Discover the best restaurants in your area"
          featuredCategory="Restaurants"
          />
        </ScrollView>

    </SafeAreaView>
  )
};

export default HomeScreen;