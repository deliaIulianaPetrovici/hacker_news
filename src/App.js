import React, { useEffect } from 'react';

import './App.css';

import Header from './components/header/header.component';
import StoriesCollectionContainer from './components/stories-collection/stories-collection.component';

import { useDispatch } from 'react-redux';
import { fetchStoriesIdsAsync } from './redux/stories/stories.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoriesIdsAsync());
  }, [dispatch]);
 
  return (
    <div className="App">
      <Header/>
      <StoriesCollectionContainer/>
     
    </div>
  );
}



export default App;
