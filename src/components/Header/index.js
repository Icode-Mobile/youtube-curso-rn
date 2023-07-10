import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { Image, Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export const Header = () => {
  return (
    <StyledView className='flex flex-row items-center justify-between p-2'>
      <StyledImage
        source={require('../../../youtube-logo.png')}
        className='w-24 h-10'
      />
      <StyledView className='flex flex-row items-center'>
        <FontAwesome5 name='chromecast' size={26} color='black' />
        <Ionicons
          style={{
            marginHorizontal: 10,
          }}
          name='notifications-outline'
          size={26}
          color='black'
        />
        <Ionicons
          name='search'
          size={26}
          color='black'
          style={{
            marginRight: 10,
          }}
        />
        <StyledImage
          source={{
            uri: 'https://github.com/Caio18-cosenza.png',
          }}
          className='w-8 h-8 rounded-full'
        />
      </StyledView>
    </StyledView>
  );
};
