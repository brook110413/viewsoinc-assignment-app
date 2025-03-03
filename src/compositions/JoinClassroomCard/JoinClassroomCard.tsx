import { Card, CopyButton } from '@/components';
import { useAppSelector } from '@/redux/store';
import { useMedia } from '@/hooks';
import {
  StyledBackToClassList,
  StyledClassTitle,
  StyledClassID,
  StyledQRCode,
  StyledQRImage,
  StyledVersion,
} from './JoinClassroomCard.styles';
import { StyledIcon } from '@/styles';
import { useMemo } from 'react';

const ICON_SIZE_MAP = {
  mobile: 18,
  tablet: 24,
  desktop: 24,
  largeDesktop: 24,
} as const;

export const JoinClassroomCard = () => {
  const { name, code, link } = useAppSelector((state) => state.classroom);
  const { media } = useMedia();

  const backwardIconSize = useMemo(() => ICON_SIZE_MAP[media], [media]);

  return (
    <Card>
      <StyledBackToClassList>
        <StyledIcon className="material-icons" size={backwardIconSize}>
          chevron_left
        </StyledIcon>
        <span>Back to Class List</span>
      </StyledBackToClassList>
      <StyledClassTitle>Join {name}</StyledClassTitle>
      <StyledClassID>
        <CopyButton copyContent={code} label={`ID ${code}`} />
        <CopyButton copyContent={link} label="Link" />
      </StyledClassID>
      <StyledQRCode>
        <StyledQRImage src="/src/assets/images/qr-code.png" alt="QR Code" />
      </StyledQRCode>
      <StyledVersion>Version 1.1.7</StyledVersion>
    </Card>
  );
};
