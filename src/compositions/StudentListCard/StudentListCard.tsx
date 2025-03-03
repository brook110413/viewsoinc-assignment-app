import { useState, useCallback } from 'react';
import { useAppSelector } from '@/redux/store';
import { StudentCard } from './components/StudentCard/StudentCard';
import { Card } from '@/components';
import {
  StyledClassTitle,
  StyledTab,
  StyledTabContainer,
  StyledStudentGrid,
  StyledMenuButton,
  StyledControlSection,
} from './StudentListCard.styles';
import { StyledIcon } from '@/styles';

const TABS = {
  STUDENTS: 'students' as const,
  GROUP: 'group' as const,
};

type TabType = (typeof TABS)[keyof typeof TABS];

export const StudentListCard = () => {
  const { name, nonAnonymousStudentsAmount, students, maxStudents } =
    useAppSelector((state) => state.classroom);
  const [activeTab, setActiveTab] = useState<TabType>(TABS.STUDENTS);

  const handleTabClick = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  return (
    <Card>
      <StyledClassTitle>
        {name}
        <StyledIcon className="material-icons" size="24px">
          person
        </StyledIcon>
        {nonAnonymousStudentsAmount}/{maxStudents}
      </StyledClassTitle>
      <StyledControlSection>
        <StyledTabContainer>
          <StyledTab
            active={activeTab === TABS.STUDENTS}
            onClick={() => handleTabClick(TABS.STUDENTS)}
          >
            Student List
          </StyledTab>
          <StyledTab
            active={activeTab === TABS.GROUP}
            onClick={() => handleTabClick(TABS.GROUP)}
          >
            Group
          </StyledTab>
        </StyledTabContainer>
        <StyledMenuButton>
          <StyledIcon className="material-icons" size="24px">
            more_vert
          </StyledIcon>
        </StyledMenuButton>
      </StyledControlSection>
      <StyledStudentGrid columns={activeTab === 'group' ? 5 : 4}>
        {students.map(({ id, order, name, points }) => (
          <StudentCard
            key={id}
            id={id}
            order={order}
            name={name}
            points={points}
          />
        ))}
      </StyledStudentGrid>
    </Card>
  );
};
