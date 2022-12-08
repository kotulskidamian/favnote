import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    <>
      {twitters.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </>
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
