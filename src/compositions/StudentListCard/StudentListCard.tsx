import { useState, useMemo, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import {
  decrementStudentPoints,
  incrementStudentPoints,
} from '@/redux/slices/classroomSlice';
import { Card } from '@/components';
import {
  StyledClassTitle,
  StyledTab,
  StyledTabContainer,
  StyledStudentGrid,
  StyledStudentCard,
  StyledStudentNumber,
  StyledStudentName,
  StyledPointsButtons,
  StyledPointsButton,
  StyledPointsCount,
} from './StudentListCard.styles';
import { StyledIcon } from '@/styles';

const TABS = {
  STUDENTS: 'students' as const,
  GROUP: 'group' as const,
};

type TabType = (typeof TABS)[keyof typeof TABS];

export const StudentListCard = () => {
  const dispatch = useAppDispatch();
  const { name, nonAnonymousStudents, students, maxStudents } = useAppSelector(
    (state) => state.classroom
  );
  const [activeTab, setActiveTab] = useState<'students' | 'group'>('students');

  const handleTabClick = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  const handleIncrementPoints = useCallback(
    (id: number) => {
      dispatch(incrementStudentPoints(id));
    },
    [dispatch]
  );

  const handleDecrementPoints = useCallback(
    (id: number) => {
      dispatch(decrementStudentPoints(id));
    },
    [dispatch]
  );

  const titleSection = useMemo(
    () => (
      <StyledClassTitle>
        {name}
        <StyledIcon className="material-icons" size="24px">
          person
        </StyledIcon>
        {nonAnonymousStudents.length}/{maxStudents}
      </StyledClassTitle>
    ),
    [name, nonAnonymousStudents.length, maxStudents]
  );

  const tabButtons = useMemo(
    () => (
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
    ),
    [activeTab, handleTabClick]
  );

  const studentList = useMemo(
    () =>
      students.map(({ id, order, name, points }) => (
        <StyledStudentCard key={id} isGuest={!name}>
          <StyledStudentNumber>{order}</StyledStudentNumber>
          <StyledStudentName>{name || 'Guest'}</StyledStudentName>
          <StyledPointsButtons>
            <StyledPointsButton
              type="down"
              onClick={() => handleDecrementPoints(id)}
              disabled={points === 0}
            >
              -1
            </StyledPointsButton>
            <StyledPointsCount>{points}</StyledPointsCount>
            <StyledPointsButton
              type="up"
              onClick={() => handleIncrementPoints(id)}
            >
              +1
            </StyledPointsButton>
          </StyledPointsButtons>
        </StyledStudentCard>
      )),
    [students, handleDecrementPoints, handleIncrementPoints]
  );

  return (
    <Card>
      {titleSection}
      {tabButtons}
      <StyledStudentGrid columns={activeTab === 'group' ? 5 : 4}>
        {studentList}
      </StyledStudentGrid>
    </Card>
  );
};
