import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import iconUp from '../../assets/icon-up.svg';

import {
  StoryContainer,
  AuthorInfo,
  StoryTitle,
  StoryScore,
  ScoreIcon,
  StoryTime,
  StoryFooter,
} from './story.styles';

import { handleDate } from '../../utils/utils';
import CustomButton from '../custom-button/custom-button.component';

const Story = ({ title, score, time, url, karma, by }) => {
  var timestamp = time * 1000;
  var date = new Date(timestamp);

  return (
    <StoryContainer>
      <AuthorInfo>
        <span>@{by}</span>
        <span>Karma {karma}</span>
      </AuthorInfo>
      <StoryTitle>{title}</StoryTitle>

      <StoryTime> {handleDate(date)} ago</StoryTime>
      <StoryFooter>
        <CustomButton onClick={() => (window.location.href = url)}>
          See Story
        </CustomButton>
        <StoryScore>
          <ScoreIcon alt={`Story Score`} src={iconUp}></ScoreIcon>
          <span>{score}</span>
        </StoryScore>
      </StoryFooter>
    </StoryContainer>
  );
};

export default Story;
