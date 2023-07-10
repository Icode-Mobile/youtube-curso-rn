import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Vibration,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import { Header } from './src/components/Header';
import { styled } from 'nativewind';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { ListVideo } from './src/components/ListVideo';

const StyledView = styled(View);
const StyledText = styled(Text);

const videos = [
  {
    title: '[Passo a Passo] Implementando Deep Linking usando React Navigation',
    thumbnail:
      'https://i9.ytimg.com/vi_webp/47df3yezJUE/mqdefault.webp?v=64934bcd&sqp=CKTwgqUG&rs=AOn4CLB6XapyqUoiKheNNCcErXc0JC1XKg',
  },
  {
    title: '[Passo a Passo] Navegação entre telas com Expo Router',
    thumbnail:
      'https://i9.ytimg.com/vi/1It1LpQTQew/mqdefault.jpg?v=648b3f6a&sqp=CKTwgqUG&rs=AOn4CLDUythQEASlsgZcnKApgpFRfAmxAA',
  },
  {
    title: '[GARANTIDO] React Native Checkbox Animada',
    thumbnail:
      'https://i9.ytimg.com/vi/hZU2tw2yLe0/mqdefault.jpg?v=648a6223&sqp=CKTwgqUG&rs=AOn4CLCxHDBpP6dyVTFTdwQiI2S9i-P8jw',
  },
  {
    title:
      '[Passo a Passo] Carregue suas fontes CORRETAMENTE usando Splash Screen',
    thumbnail:
      'https://i9.ytimg.com/vi/rFHx7Ojl5s4/mqdefault.jpg?v=6485ec76&sqp=CKTwgqUG&rs=AOn4CLAq9elR0BLd3c-48UiqOVqXpgbZfg',
  },
];

export default function App() {
  function AlertInfoVideo(title) {
    Vibration.vibrate([300, 500], false);
    if (Platform.OS === 'android') {
      ToastAndroid.show(title, ToastAndroid.SHORT);
    } else {
      Alert.alert('Informação Vídeo', title);
    }
  }

  return (
    <StyledView
      style={{
        paddingTop: getStatusBarHeight(true),
      }}
    >
      <Header />
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <ListVideo
            title={item.title}
            thumb={item.thumbnail}
            onAlert={AlertInfoVideo}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      />
      <StatusBar style='light' backgroundColor='#111' />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
