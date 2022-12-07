import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const Articles = ({ articles }) => (
  <GridTemplate>
    <>
      {articles.map(item => (
        <Card cardType="articles" key={item.id} {...item} />
      ))}
    </>
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
