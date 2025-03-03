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
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload
      );
      if (studentIndex === -1) return;

      state.students[studentIndex].points += 1;
    },
    decrementStudentPoints: (state, action: PayloadAction<number>) => {
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload
      );
      if (studentIndex === -1) return;

      const student = state.students[studentIndex];
      if (student.points <= 0) return;

      state.students[studentIndex].points -= 1;
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
