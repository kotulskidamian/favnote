import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import DetailsTemplate from '../templates/DetailsTemplate';

class DetailsPage extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { pathname } = this.props;
    const { id } = this.props;

    switch (pathname) {
      case routes.twitter.replace(':id', id):
        this.setState({ pageType: 'twitters' });
        break;
      case routes.notes.replace(':id', id):
        this.setState({ pageType: 'notes' });
        break;
      case routes.article.replace(':id', id):
        this.setState({ pageType: 'articles' });
        break;
      default:
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <>
        <DetailsTemplate pageType={pageType}>
          <p>{pageType}</p>
        </DetailsTemplate>
      </>
    );
  }
}

DetailsPage.propTypes = {
  id: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

const withPathDataHooks = Component => {
  // This below is just a function component (like others in separate file)
  // needed for use hooks in class component
  // https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
  const WrappedComponent = props => {
    const location = useLocation();
    const { id } = useParams();

    return <Component {...props} pathname={location.pathname} id={id} />;
  };

  return WrappedComponent;
};

export default withPathDataHooks(DetailsPage);
