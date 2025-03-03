import { useEffect } from 'react';
import { JoinClassroomCard, StudentListCard } from '@/compositions';
import { useAppDispatch } from '@/redux/store';
import { fetchClassroom } from '@/redux/slices/classroomSlice';
import { StyledAppBackground, StyledClassroomContainer } from '@/styles';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClassroom());
  }, [dispatch]);

  return (
    <StyledAppBackground>
      <StyledClassroomContainer>
        <JoinClassroomCard />
        <StudentListCard />
      </StyledClassroomContainer>
    </StyledAppBackground>
  );
}

export default App;
