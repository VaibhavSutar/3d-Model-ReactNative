import {View, Text, TouchableOpacity, FlatList, ScrollView, Image} from 'react-native';
import React, {Suspense} from 'react';
import tw from 'twrnc';
import {Canvas} from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import Shoes from '../src/components/Shoes';
import SizeComponent from '../src/components/SizeComponent';

const data = [
  {
    id: 1,
    title: 'US 4',
  },
  {
    id: 2,
    title: 'US 5',
  },
  {
    id: 3,
    title: 'US 6',
  },
  {
    id: 4,
    title: 'US 7',
  },
  {
    id: 5,
    title: 'US 8',
  },
  {
    id: 6,
    title: 'US 9',
  },
  {
    id: 7,
    title: 'US 10',
  },
  {
    id: 8,
    title: 'US 11',
  },
];
const ProductPage = () => {
  const [Orbitcontrols, events] = useControls();
  return (
    // {Container View}
    <View style={tw`bg-white flex-1`}>
      <View style={tw`bg-gray-300 h-1/2 rounded-3xl m-3`} {...events}>
        <View style={tw`items-center mt-4 flex-row justify-around`}>
          {/* {Nav View} */}
          <TouchableOpacity><Image  source={require("../src/icons/arrowLeft.png")} style={tw`w-8 h-5`} /></TouchableOpacity>
          <Text style={tw`text-black text-xl font-semibold`}>
            Sneaker Details
          </Text>
          <TouchableOpacity><Image  source={require("../src/icons/menu.png")} style={tw`w-8 h-5`} /></TouchableOpacity>
        </View>
        <Canvas>
          <Orbitcontrols enablePan={false} />
          <Suspense fallback={null}>
            <directionalLight position={[1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[0, 1, 0]} args={['white', 5]} />
            <directionalLight position={[0, -1, 0]} args={['white', 5]} />
            <directionalLight position={[0, 0, 1]} args={['white', 5]} />
            <directionalLight position={[0, 0, -1]} args={['white', 5]} />
            <Shoes />
          </Suspense>
        </Canvas>
        {/* {Model View} */}
      </View>
      <View style={tw` flex-1 rounded-t-2xl`}>
        {/* {Description View} */}
        <View style={tw`m-1 ml-3`}>
          <Text style={tw`text-black text-xl p-1`}>Nike Shoes</Text>
          <Text style={tw`text-black text-xl p-1`}>Rs 10,000</Text>
          <View style={tw`flex-row mt-5 justify-around`}>
            <Text
              style={tw`text-black text-sm p-2 border-2 border-gray-200 text-center w-25 rounded-2xl`}>
              5 Pair Left
            </Text>
            <Text
              style={tw`text-black text-sm p-2 border-2 border-gray-200 text-center w-25 rounded-2xl`}>
              Sold 50
            </Text>
            <Text
              style={tw`text-black text-sm p-2 border-2 border-gray-200 text-center w-25 rounded-2xl`}>
              {' '}
              4.7{' '}
            </Text>
          </View>
          <View style={tw`border-t-2 border-gray-300 mt-5 mb-4`} />
          <View>
            <View style={tw`flex-row justify-between mt-2 m-2`}>
              <Text style={tw`text-black`}>Select Size</Text>
              <Text style={tw`text-black text-green-600 font-bold`}>
                Size Chart
              </Text>
            </View>
            <View style={tw`flex-row`}>
      
            <FlatList 
            horizontal
            data={data}
            keyExtractor={(item) => item.id}

            renderItem={({item,id})=>
          { return(
            <SizeComponent key={id} title={item.title} />
            )
          }}
            />
          </View>
          </View>
          <View style={tw`flex-row justify-around mt-10`}>
            <TouchableOpacity
              style={tw`bg-green-500 w-40 p-1 rounded-xl justify-center items-center`}>
              <Text style={tw`text-black text-xl p-1`}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-green-500 w-40 p-1 rounded-xl justify-center items-center`}>
              <Text style={tw`text-black text-xl p-1`}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ProductPage;