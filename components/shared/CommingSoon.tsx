import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ComingSoon = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 gap-4 items-center justify-center">
      <Text className="text-4xl font-bold text-purple-500">Coming Soon...</Text>
      <Button title="Go to Explorer" onPress={() => navigation.navigate('Explorer' as never)} />
    </View>
  );
};

export default ComingSoon;