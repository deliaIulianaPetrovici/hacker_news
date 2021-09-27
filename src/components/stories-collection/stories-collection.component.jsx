import React from 'react';
import { connect, useSelector } from 'react-redux';

import Story from '../story/story.component';

import { sortStoriesByScore } from '../../redux/stories/stories.utils';

import { StoriesCollectionContainer } from './stories-collection.styles';

const StoriesCollection = () => {
  const stories = useSelector((state) => state.stories.stories);

  return (
    <StoriesCollectionContainer>
      {sortStoriesByScore(stories).map(({ id, ...props }) => (
        <Story key={id} {...props}></Story>
      ))}
    </StoriesCollectionContainer>
  );
};

export default StoriesCollection;
