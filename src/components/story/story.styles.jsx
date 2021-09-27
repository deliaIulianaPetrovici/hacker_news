import styled from 'styled-components';

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
  flex-direction: column;

  background: #f1f3fa;

  padding: 20px 40px;
  box-sizing: border-box;
  border-top: 8px solid;
  border-image: linear-gradient(225deg, #40db82 0%, #388fe7 98.02%);
  border-image-slice: 1;
  border-radius: 5px;
`;

export const AuthorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #63687d;
`;

export const StoryTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
  align-self: start;
`;
export const StoryTime = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #7c8f8f;
  align-self: start;
`;
export const StoryFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const StoryScore = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  height: 20px;
  color: #1eb589;
  align-self: end;
`;

export const ScoreIcon = styled.img`
  height: 7px;
  width: 8px;
  margin: auto 5px;
`;
