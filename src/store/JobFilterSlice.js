// jobFilterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    roles: [],
    experience: [],
    company: '',
    minSalary: null,
    maxSalary: null,
    numberOfEmployees: null,
    jobType: null,
    techStack: [] 
  }
};

const jobFilterSlice = createSlice({
  name: 'jobFilter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setRoles: (state, action) => {
      state.filters.roles = action.payload;
    },
    setExperience: (state, action) => {
      state.filters.experience = action.payload;
    },
    setCompany: (state, action) => {
      state.filters.company = action.payload;
    },
    setMinSalary: (state, action) => {
      state.filters.minSalary = action.payload;
    },
    setMaxSalary: (state, action) => {
      state.filters.maxSalary = action.payload;
    },
    setNumberOfEmployees: (state, action) => {
      state.filters.numberOfEmployees = action.payload;
    },
    setJobType: (state, action) => {
      state.filters.jobType = action.payload;
    },
    setTechStack: (state, action) => {
        state.filters.techStack = action.payload;
      }
  }
});

export const { setFilters, setRoles, setExperience, setCompany, setMinSalary, setMaxSalary, setNumberOfEmployees, setJobType, setTechStack } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;