import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.notes};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    Story => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon}></ButtonIcon>;
export const BulbActive = () => <ButtonIcon active icon={bulbIcon}></ButtonIcon>;
export const Logout = () => <ButtonIcon icon={logoutIcon}></ButtonIcon>;
export const Pen = () => <ButtonIcon icon={penIcon}></ButtonIcon>;
export const Plus = () => <ButtonIcon icon={plusIcon}></ButtonIcon>;
export const Twitter = () => <ButtonIcon icon={twitterIcon}></ButtonIcon>;
