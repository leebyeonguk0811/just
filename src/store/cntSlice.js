import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cnt : 0
}

const cntSlice = createSlice({
    name : '메인슬라이드 카운터',
    initialState : initState,
    reducers : {                   
        setCnt : (state , action)=>{
            if(action.payload ===1){
                state.cnt = 1;    
            } else {
                state.cnt = state.cnt + 1;
            }
            
        }
    }
});

export default cntSlice.reducer;
export const {setCnt} = cntSlice.actions;