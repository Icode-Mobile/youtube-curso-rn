import { styled } from 'nativewind';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export const ListVideo = ({ title, thumb, onAlert }) => {
  return (
    <StyledTouchableOpacity
      onPress={() => onAlert(title)}
      activeOpacity={0.8}
      className='mt-4'
    >
      <StyledImage
        source={{
          uri: thumb,
        }}
        className='w-full h-48'
      />
      <StyledView className='flex flex-row px-2 mt-2'>
        <StyledImage
          source={require('../../../curso.png')}
          className='w-8 h-8 rounded-full'
        />
        <StyledView className='flex flex-col pr-8'>
          <StyledText className='ml-3 text-black text-[14px]'>
            {title}
          </StyledText>
          <StyledText className='ml-3 text-zinc-500 text-[12px]'>
            Curso Intensivo De React Native
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  );
};
