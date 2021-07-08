import { Avatar } from '@chakra-ui/react';
import React from 'react';

type AvatarCustomProps = {
  variant: 'small' | 'big';
  avatar: string | null;
};

const AvatarCustom = (props: AvatarCustomProps) => {
  const { avatar, variant } = props;

  return (
    <Avatar
      src={
        avatar === null
          ? undefined
          : document.location.origin + '/public/media/avatars/' + avatar
      }
      w={
        variant === 'big'
          ? { base: '50px', sm: '70px', md: '70px', lg: '74px', xl: '74px' }
          : { base: '26px', sm: '30px', md: '30px', lg: '40px', xl: '50px' }
      }
      h={
        variant === 'big'
          ? { base: '50px', sm: '60px', md: '70px', lg: '74px', xl: '74px' }
          : { base: '26px', sm: '30px', md: '30px', lg: '40px', xl: '50px' }
      }
    />
  );
};

export default AvatarCustom;
