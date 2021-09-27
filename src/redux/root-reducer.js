import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import storiesReducer from './stories/stories.reducer';

const persistConfig = {
  key: 'root',
  storage,
 
};


  const rootReducer=combineReducers({
    stories:storiesReducer,
   
      
  });

  export default persistReducer(persistConfig, rootReducer);