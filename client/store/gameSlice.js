import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getGamePrompt = createAsyncThunk('game/getPrompt', async(storypromptId) => {
  try{
    const { data } = await axios.get(`/api/gamestart/${storypromptId}`);
    return data;
  } catch(error) {
    return error;
  }
});

const gameSlice = createSlice({
  name:'game',
  initialState: {
    game: {
      plotPoint: "",
      PathOptions: [],
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getGamePrompt.fulfilled, (state, { payload }) => {
      state.game = payload;
    })
  }
})

export const gameReducer = gameSlice.reducer;
