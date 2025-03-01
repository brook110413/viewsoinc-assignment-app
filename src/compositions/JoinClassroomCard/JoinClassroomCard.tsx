import { Card, CopyButton } from '@/components';
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
  return (
    <Card>
      <StyledBackToClassList>
        <StyledIcon className="material-icons" size="24px">
          chevron_left
        </StyledIcon>
        <span>Back to Class List</span>
      </StyledBackToClassList>
      <StyledClassTitle>Join 302 Science</StyledClassTitle>
      <StyledClassID>
        <CopyButton copyContent="X58E9647" label="ID X58E9647" />
        <CopyButton
          copyContent="https://www.classswift.viewsonic.io/"
          label="Link"
        />
      </StyledClassID>
      <StyledQRCode>
        <StyledQRImage src="/src/assets/images/qr-code.png" alt="QR Code" />
      </StyledQRCode>
      <StyledVersion>Version 1.1.7</StyledVersion>
    </Card>
  );
};
