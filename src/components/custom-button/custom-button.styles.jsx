import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  min-width: 73px;

  height: 48px;
  border-radius: 5px;
  padding: 0 25px;
  font-weight: 700;

  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  background-color: rgb(60, 175, 189);
  color: #fff;
  &:hover {
    background-color: #f1f3fa;
    border: 2px solid rgb(60, 175, 189);
    color: rgb(60, 175, 189);
  }

  &:focus {
    outline: none;
  }
`;
