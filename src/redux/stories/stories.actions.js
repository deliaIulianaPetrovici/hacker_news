import StoryActionTypes from "./stories.types";
import axios from "axios";

import {fetchStoriesFromIds, fetchStoriesAuthors} from './stories.utils';
import {getRandomTopStories} from '../../utils/utils';

const numberOfRandomStories=10;

// ****Fetch stories ids actions*****
export const fetchStoriesIDSStart=()=>({
  type:StoryActionTypes.FETCH_STORIES_IDS_START,
});

export const fetchStoriesIDSSuccess=storiesIds=>({
  type:StoryActionTypes.FETCH_STORIES_IDS_SUCCESS,
  payload:storiesIds
});

export const fetchStoriesIDSFailure=errorMessage=>({
  type:StoryActionTypes.FETCH_STORIES_IDS_FAILURE,
  payload:errorMessage
});


// ****Fetch stories from ids actions*****

export const fetchStoriesStart=()=>({
  type:StoryActionTypes.FETCH_STORIES_START,
});

export const fetchStoriesSuccess=stories=>({
  type:StoryActionTypes.FETCH_STORIES_SUCCESS,
  payload:stories
});

export const fetchStoriesFailure=errorMessage=>({
  type:StoryActionTypes.FETCH_STORIES_FAILURE,
  payload:errorMessage
});

// ****Fetch stories authors*****

export const fetchStoriesAuthorsStart=()=>({
  type:StoryActionTypes.FETCH_STORIES_AUTHOR_START,
});

export const fetchStoriesAuthorsSuccess=updatedStories=>({
  type:StoryActionTypes.FETCH_STORIES_AUTHOR_SUCCESS,
  payload:updatedStories
});

export const fetchStoriesAuthorsFailure=errorMessage=>({
  type:StoryActionTypes.FETCH_STORIES_AUTHOR_FAILURE,
  payload:errorMessage
});

export const fetchStoriesIdsAsync=()=>{
  return dispatch=>{
    dispatch(fetchStoriesIDSStart());

   axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
   .then(response=>{
    
    const randomStoriesIds=getRandomTopStories(response.data,numberOfRandomStories)
    dispatch(fetchStoriesIDSSuccess(randomStoriesIds));
    dispatch(fetchStoriesStartAsync(randomStoriesIds));
   })
   .catch(error=>{
     dispatch(fetchStoriesIDSFailure(error.message));
   })
 
  }
}

export const fetchStoriesStartAsync=(storiesIds)=>{
  return dispatch=>{
    dispatch(fetchStoriesStart());

    fetchStoriesFromIds(storiesIds).then(stories=>{

    dispatch(fetchStoryAuthorsStartAsync(stories));

    dispatch(fetchStoriesSuccess(stories));
   })
   .catch(error=>{
     dispatch(fetchStoriesFailure(error.message));
   })
 
  }
}

export const fetchStoryAuthorsStartAsync=(stories)=>{
 
  return dispatch=>{
    dispatch(fetchStoriesAuthorsStart());
     
    fetchStoriesAuthors(stories).then(authors=>{
    
    const nessaryAuthorInfo=authors.map(author=>({id:author.id, karma:author.karma}));
    const updatedStories=stories.map(story=>({
      ...nessaryAuthorInfo.find((author)=>(author.id===story.by) && author),
      ...story
    }))
    
    
     dispatch(fetchStoriesAuthorsSuccess(updatedStories));
    })
    .catch(error=>{
      dispatch(fetchStoriesAuthorsFailure(error.message));
    })
  }
}