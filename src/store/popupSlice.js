import { createSlice } from "@reduxjs/toolkit";

const initState = {
    show : false,
    title : ''
}

const popupSlice = createSlice({
    name : 'popup',
    initialState : initState,
    reducers : {                    // popup 액션 메소드 추가
        // popupOpenAction : (state , action)=>{
        //     state.show = action.payload;
        // },
        // popupCloseAction : (state , action)=>{
        //     state.show = action.payload;  
        // },
        popupAction : (state , action)=>{
            state.show = action.payload.show;    // payload 는 action 에 전달되어 오는 값
            state.title = action.payload.title
        }
    }
});

export default popupSlice.reducer;
export const {popupAction} = popupSlice.actions;