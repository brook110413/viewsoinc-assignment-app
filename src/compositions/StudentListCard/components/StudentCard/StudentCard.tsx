import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/redux/store';
import {
  incrementStudentPoints,
  decrementStudentPoints,
} from '@/redux/slices/classroomSlice';
import { Student } from '@/types';
import {
  StyledStudentCard,
  StyledStudentNumber,
  StyledStudentName,
  StyledPointsButtons,
  StyledPointsButton,
  StyledPointsCount,
} from './StudentCard.styles';

export const StudentCard = memo(({ id, order, name, points }: Student) => {
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(incrementStudentPoints(id));
  }, [dispatch, id]);

  const handleDecrement = useCallback(() => {
    dispatch(decrementStudentPoints(id));
  }, [dispatch, id]);

  return (
    <StyledStudentCard key={id} isGuest={!name}>
      <StyledStudentNumber>{order}</StyledStudentNumber>
      <StyledStudentName>{name || 'Guest'}</StyledStudentName>
      <StyledPointsButtons>
        <StyledPointsButton
          type="down"
          onClick={handleDecrement}
          disabled={points === 0}
        >
          -1
        </StyledPointsButton>
        <StyledPointsCount>{points}</StyledPointsCount>
        <StyledPointsButton type="up" onClick={handleIncrement}>
          +1
        </StyledPointsButton>
      </StyledPointsButtons>
    </StyledStudentCard>
  );
});
