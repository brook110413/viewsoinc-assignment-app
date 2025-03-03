import { useState, useCallback, useRef, useMemo } from 'react';
import { useAppSelector } from '@/redux/store';
import { StudentCard } from './components/StudentCard/StudentCard';
import { Card, Menu } from '@/components';
import {
  StyledClassTitle,
  StyledTab,
  StyledTabContainer,
  StyledStudentGrid,
  StyledMenuButton,
  StyledControlSection,
} from './StudentListCard.styles';
import { StyledIcon } from '@/styles';
import { useMedia } from '@/hooks';

const ICON_SIZE_MAP = {
  mobile: 18,
  tablet: 24,
  desktop: 24,
  largeDesktop: 24,
} as const;

const TABS = {
  STUDENTS: 'students' as const,
  GROUP: 'group' as const,
};

type TabType = (typeof TABS)[keyof typeof TABS];

export const StudentListCard = () => {
  const { media } = useMedia();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { name, nonAnonymousStudentsAmount, students, maxStudents } =
    useAppSelector((state) => state.classroom);
  const [activeTab, setActiveTab] = useState<TabType>(TABS.STUDENTS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const IconSize = useMemo(() => ICON_SIZE_MAP[media], [media]);

  const handleTabClick = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Card>
      <StyledClassTitle>
        {name}
        <StyledIcon className="material-icons" size={IconSize}>
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
        <StyledMenuButton ref={menuButtonRef} onClick={handleMenuClick}>
          <StyledIcon className="material-icons" size={IconSize}>
            more_vert
          </StyledIcon>
        </StyledMenuButton>
        <Menu
          anchorEl={menuButtonRef.current}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <Menu.Item>Refresh</Menu.Item>
          <Menu.Item>Export Score</Menu.Item>
        </Menu>
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
