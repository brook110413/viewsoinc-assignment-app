import { useEffect } from 'react';
import { JoinClassroomCard, StudentListCard } from '@/compositions';
import { useAppDispatch } from '@/redux/store';
import { fetchClassroom } from '@/redux/slices/classroomSlice';
import {
  GlobalStyle,
  StyledAppBackground,
  StyledClassroomContainer,
} from '@/styles';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClassroom());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <StyledAppBackground>
        <StyledClassroomContainer>
          <JoinClassroomCard />
          <StudentListCard />
        </StyledClassroomContainer>
      </StyledAppBackground>
    </>
  );
}

export default App;
