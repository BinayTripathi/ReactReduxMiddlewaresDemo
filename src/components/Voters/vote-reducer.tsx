import { createSlice } from "@reduxjs/toolkit";

export type VOTER_STATE_TYPE = number;

const initState = 0;

const VoteSlice = createSlice({
    name: 'voteCounter',
    initialState: initState,
    reducers : {
        upvote : (state) => state +1,
        downvote: (state) => state -1
    }
})


export const voteActions = VoteSlice.actions;
export type voteReducerType = ReturnType<typeof VoteSlice.reducer>;
export default VoteSlice;
