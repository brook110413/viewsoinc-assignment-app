import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Classroom } from '@/types';

const initialState: Classroom = {
  id: '',
  name: '',
  code: '',
  link: '',
  maxStudents: 0,
  students: [],
  nonAnonymousStudentsAmount: 0,
};

const findTargetStudentIndex = (
  students: Classroom['students'],
  studentId: number
) => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  return studentIndex === -1 ? null : studentIndex;
};

export const fetchClassroom = createAsyncThunk<Classroom>(
  'classroom/fetchClassroom',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/src/api/classroom.json');
      if (!response.ok) {
        throw new Error('Failed to fetch classroom data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const classroomSlice = createSlice({
  name: 'classroom',
  initialState,
  reducers: {
    incrementStudentPoints: (state, action: PayloadAction<number>) => {
      const result = findTargetStudentIndex(state.students, action.payload);
      if (!result) return;

      state.students[result].points += 1;
    },
    decrementStudentPoints: (state, action: PayloadAction<number>) => {
      const result = findTargetStudentIndex(state.students, action.payload);
      if (!result) return;

      const targetStudent = state.students[result];
      if (targetStudent.points <= 0) return;

      state.students[result].points -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClassroom.fulfilled, (_, action) => {
      return {
        ...action.payload,
        nonAnonymousStudentsAmount: action.payload.students.filter(
          ({ name }) => name
        ).length,
      };
    });
  },
});

export const { incrementStudentPoints, decrementStudentPoints } =
  classroomSlice.actions;
export default classroomSlice.reducer;
