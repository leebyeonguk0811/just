"@reduxjs/toolkit": "^2.2.2"   >> store 생성시 필요
"react-redux": "^9.1.0"        >> 컴포넌트에서 사용 

리듀서 생성 3단계
1. import
2. const 리듀서 생성
3. export

index.js 에서
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
반드시 필요


리듀서 설계
1. [src]
        [store]
            - popupSlice.js
                state = { show : true }