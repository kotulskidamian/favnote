import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ cardType, theme }) => (cardType ? theme[cardType] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

// IMPORTANT
const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <StyledHeading>Hello Mordo!</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitters' && (
        <StyledAvatar src="https://avatars.dicebear.com/api/bottts/:damian.svg?b=yellow" />
      )}
      {cardType === 'articles' && <StyledLinkButton href="https://youtube.com" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Exercitation mollit ea ea ipsum minim id cupidatat sit est. Eiusmod id exercitation culpa
        qui irure adipisicing et occaecat sint. Labore cillum enim nulla culpa Lorem ex nostrud
        laborum in est ea eiusmod. Voluptate aliqua duis officia incididunt enim ut ut adipisicing
        labore veniam cillum nostrud consectetur nulla. Nisi veniam cillum sint elit et cillum duis
        qui velit.
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Card.defaultProps = {
  cardType: 'notes',
};

export default Card;
