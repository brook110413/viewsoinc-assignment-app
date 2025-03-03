import { useMemo } from 'react';
import { Card, CopyButton } from '@/components';
import { useAppSelector } from '@/redux/store';
import { useMedia } from '@/hooks';
import { ICON_SIZE_MAP } from '@/utils';
import { StyledIcon } from '@/styles';
import {
  StyledBackToClassList,
  StyledClassTitle,
  StyledClassID,
  StyledQRCode,
  StyledQRImage,
  StyledVersion,
} from './JoinClassroomCard.styles';

export const JoinClassroomCard = () => {
  const { media } = useMedia();
  const { name, code, link } = useAppSelector((state) => state.classroom);
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
