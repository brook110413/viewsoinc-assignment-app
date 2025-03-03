import {
  StyledCopyButton,
  StyledCopyButtonContainer,
} from './CopyButton.styles';
import { StyledIcon } from '@/styles';

interface CopyButtonProps {
  copyContent: string;
  label?: string;
}

export const CopyButton = ({ copyContent, label }: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyContent);
      window.alert('複製成功');
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  return (
    <StyledCopyButtonContainer>
      <span>{label}</span>
      <StyledCopyButton onClick={handleCopy}>
        <StyledIcon className="material-icons">content_copy</StyledIcon>
      </StyledCopyButton>
    </StyledCopyButtonContainer>
  );
};
