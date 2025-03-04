import { StyledIcon } from '@/styles';
import {
  StyledCopyButton,
  StyledCopyButtonContainer,
} from './CopyButton.styles';

interface CopyButtonProps {
  copyContent: string;
  label?: string;
}

export const CopyButton = ({ copyContent, label }: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyContent);
      window.alert('copied');
    } catch (err) {
      console.error('copy failed:', err);
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
