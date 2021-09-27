import StoryActionTypes from "./stories.types";

const INITIAL_STATE={
  storiesIds:[],
  stories:[],
  isStoriesFetching:false,
  errorMessage:undefined
}

const storiesReducer=(state=INITIAL_STATE, action)=>{
  switch(action.type){
 
    case StoryActionTypes.FETCH_STORIES_IDS_START:
    case StoryActionTypes.FETCH_STORIES_START:
    case StoryActionTypes.FETCH_STORIES_AUTHOR_START:
      return {
        ...state,
        isStoriesFetching:true
      }
      case StoryActionTypes.FETCH_STORIES_IDS_SUCCESS:
        return{
          ...state,
          storiesIds:action.payload
        }
      case StoryActionTypes.FETCH_STORIES_SUCCESS:
        return{
          ...state,
          stories:action.payload
        }
        case StoryActionTypes.FETCH_STORIES_AUTHOR_SUCCESS:
          return{
            ...state,
            isStoriesFetching:false,
            stories:action.payload
          }

      case StoryActionTypes.FETCH_STORIES_AUTHOR_FAILURE:
      case StoryActionTypes.FETCH_STORIES_IDS_FAILURE:
      case StoryActionTypes.FETCH_STORIES_FAILURE:
        return{
          ...state,
          isStoriesFetching:false,
          errorMessage:action.payload
        }
        default:
          return state;
  }
}

export default storiesReducer;