// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import productApi from "../../api/productApi";

// export const getListQuestionByUser = createAsyncThunk(
// 	"admin/getListQuestion",
// 	async (params) => {
// 		const response = await questionsApi.userGetQuestions(params);
// 		return response;
// 	}
// );

// const userSlice = createSlice({
// 	name: "user",
// 	initialState: {
// 		current: {},
// 		loading: false,
// 		error: "",
// 	},
// 	reducers: {},
// 	extraReducers: {
// 		// handle get list question
// 		[getListQuestionByUser.pending]: (state) => {
// 			state.loading = true;
// 		},
// 		[getListQuestionByUser.fulfilled]: (state, action) => {
// 			state.error = "";
// 			state.loading = false;
// 			state.current = action.payload;
// 		},
// 		[getListQuestionByUser.rejected]: (state, action) => {
// 			state.loading = false;
// 			state.error = action.error;
// 		},

// 		// handle user submit answers
// 		[userSubmitAnswers.pending]: (state) => {
// 			state.loading = true;
// 		},
// 		[userSubmitAnswers.fulfilled]: (state, action) => {
// 			state.error = "";
// 			state.loading = false;
// 			state.current = action.payload;
// 		},
// 		[userSubmitAnswers.rejected]: (state, action) => {
// 			state.loading = false;
// 			state.error = action.error;
// 		},
// 	},
// });

// const { reducer, actions } = userSlice;
// export const {} = actions;
// export default reducer;
