import { JoinClassroomCard, StudentListCard } from '@/compositions';

import {
  GlobalStyle,
  StyledAppBackground,
  StyledClassroomContainer,
} from '@/styles';

function App() {
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
