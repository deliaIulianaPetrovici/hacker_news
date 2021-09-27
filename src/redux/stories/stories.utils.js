
import axios from "axios";

export const fetchStoriesFromIds=(storiesIds)=>{

    const storyPromises=storiesIds.map(storyID=> axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`).then(response=>response.data));
   return axios.all(storyPromises) ;

}

export const fetchStoriesAuthors=(stories)=>{
  
  const authorPromises=stories.map(story=> axios.get(`https://hacker-news.firebaseio.com/v0/user/${story.by}.json `).then(response=>response.data));
 return axios.all(authorPromises) ;

}

export const sortStoriesByScore=(stories)=>{

 return stories.sort((a, b) => { 
 return a.score - b.score});
}