import { Avatar } from '@chakra-ui/react';
import React from 'react';

export enum AvatarVariants {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

export interface ISizes {
  base: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const avatarSizeMap: Record<AvatarVariants, ISizes | undefined> = {
  [AvatarVariants.Small]: {
    base: '30px',
    sm: '30px',
    md: '34px',
    lg: '36px',
    xl: '38px',
  },
  [AvatarVariants.Medium]: {
    base: '36px',
    sm: '36px',
    md: '38px',
    lg: '42px',
    xl: '44px',
  },
  [AvatarVariants.Big]: {
    base: '50px',
    sm: '60px',
    md: '64px',
    lg: '70px',
    xl: '70px',
  },
};

type AvatarCustomProps = {
  variant: 'small' | 'medium' | 'big';
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
      w={{
        base: avatarSizeMap[variant as AvatarVariants]?.base,
        sm: avatarSizeMap[variant as AvatarVariants]?.sm,
        md: avatarSizeMap[variant as AvatarVariants]?.md,
        lg: avatarSizeMap[variant as AvatarVariants]?.lg,
        xl: avatarSizeMap[variant as AvatarVariants]?.xl,
      }}
      h={{
        base: avatarSizeMap[variant as AvatarVariants]?.base,
        sm: avatarSizeMap[variant as AvatarVariants]?.sm,
        md: avatarSizeMap[variant as AvatarVariants]?.md,
        lg: avatarSizeMap[variant as AvatarVariants]?.lg,
        xl: avatarSizeMap[variant as AvatarVariants]?.xl,
      }}
    />
  );
};

export default AvatarCustom;
