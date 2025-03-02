import { useState } from 'react';
import { Card } from '@/components';
import {
  StyledClassTitle,
  StyledTab,
  StyledTabContainer,
  StyledStudentGrid,
  StyledStudentCard,
  StyledStudentNumber,
  StyledStudentName,
  StyledVoteButtons,
  StyledVoteButton,
  StyledVoteCount,
} from './StudentListCard.styles';
import { StyledIcon } from '@/styles';

const students = [
  { id: '01', name: 'Philip', votes: 2 },
  { id: '02', name: 'Darrell', votes: 5 },
  { id: '03', name: 'Guest', votes: 0 },
  { id: '04', name: 'Cody', votes: 9 },
  { id: '05', name: 'Guest', votes: 0 },
  { id: '06', name: 'Guest', votes: 0 },
  { id: '07', name: 'Bessie', votes: 0 },
  { id: '08', name: 'Wendy', votes: 3 },
  { id: '09', name: 'Guest', votes: 0 },
  { id: '10', name: 'Esther', votes: 1 },
  { id: '11', name: 'Guest', votes: 0 },
  { id: '12', name: 'Gloria', votes: 1 },
  { id: '13', name: 'Guest', votes: 0 },
  { id: '14', name: 'Lee', votes: 2 },
  { id: '15', name: 'Guest', votes: 0 },
  { id: '16', name: 'Ann', votes: 0 },
  { id: '17', name: 'Jacob', votes: 8 },
  { id: '18', name: 'Calvin', votes: 2 },
  { id: '19', name: 'Guest', votes: 0 },
  { id: '20', name: 'Joe', votes: 0 },
  { id: '21', name: 'Guest', votes: 0 },
  { id: '22', name: 'Guest', votes: 0 },
  { id: '23', name: 'Guest', votes: 0 },
  { id: '24', name: 'Guest', votes: 0 },
  { id: '25', name: 'Guest', votes: 0 },
  { id: '26', name: 'Guest', votes: 0 },
];

export const StudentListCard = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'group'>('students');

  const handleTabClick = (tab: 'students' | 'group') => {
    setActiveTab(tab);
  };

  return (
    <Card>
      <StyledClassTitle>
        302 Science
        <StyledIcon className="material-icons" size="24px">
          person
        </StyledIcon>
        16/30
      </StyledClassTitle>
      <StyledTabContainer>
        <StyledTab
          active={activeTab === 'students'}
          onClick={() => handleTabClick('students')}
        >
          Student List
        </StyledTab>
        <StyledTab
          active={activeTab === 'group'}
          onClick={() => handleTabClick('group')}
        >
          Group
        </StyledTab>
      </StyledTabContainer>
      <StyledStudentGrid columns={activeTab === 'group' ? 5 : 4}>
        {students.map((student) => (
          <StyledStudentCard key={student.id}>
            <StyledStudentNumber>{student.id}</StyledStudentNumber>
            <StyledStudentName>{student.name}</StyledStudentName>
            <StyledVoteButtons>
              <StyledVoteButton type="down">-1</StyledVoteButton>
              <StyledVoteCount>{student.votes}</StyledVoteCount>
              <StyledVoteButton type="up">+1</StyledVoteButton>
            </StyledVoteButtons>
          </StyledStudentCard>
        ))}
      </StyledStudentGrid>
    </Card>
  );
};
