import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AboutPage() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#1f2937', '#000000']} // gray-800 → black
      className="flex-1"
    >
      <SafeAreaView className="flex-1 p-6">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.push('/speech')}
          className="absolute top-5 left-5 p-2 mt-6 rounded-full"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} // transparent black bg
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        {/* Content */}
        <View className="flex-1 justify-center items-center gap-2">
          <Text className="text-white text-xl font-bold">
            About this App
          </Text>
          <Text className="text-white text-xl font-bold">
            &
          </Text>
          <Text className="text-white text-xl font-bold px-2 text-center">
            How it will serve for the welfare of the society 😊
          </Text>
          <Text className="text-gray-500 text-xl px-2 text-center mt-12">
            (Yet to be created)
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
