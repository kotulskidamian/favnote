import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const Notes = ({ notes }) => (
  <GridTemplate>
    <>
      {notes.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </>
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
