import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const SizeComponent = ({title}) => {
  return (
    <TouchableOpacity style={tw`w-20 bg-gray-100 justify-center items-center justify-around rounded-xl m-2 mt-5`}>
                <Text style={tw`text-black text-base p-1`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SizeComponent