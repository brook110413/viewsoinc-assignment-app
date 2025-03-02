import { Card, CopyButton } from '@/components';
import { useAppSelector } from '@/redux/store';
import {
  StyledBackToClassList,
  StyledClassTitle,
  StyledClassID,
  StyledQRCode,
  StyledQRImage,
  StyledVersion,
} from './JoinClassroomCard.styles';
import { StyledIcon } from '@/styles';

export const JoinClassroomCard = () => {
  const { name, code, link } = useAppSelector((state) => state.classroom);

  return (
    <Card>
      <StyledBackToClassList>
        <StyledIcon className="material-icons" size="24px">
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
