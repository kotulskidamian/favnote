import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const { pathname } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pathname: PropTypes.string.isRequired,
};

const withPathDataHooks = Component => {
  const WrappedComponent = props => {
    const location = useLocation();

    let { pathname } = location;

    const regex = /[/]/;
    if (pathname.split(regex).length > 2) {
      pathname = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
    }

    return <Component {...props} pathname={pathname} />;
  };

  return WrappedComponent;
};

export default withPathDataHooks(MainTemplate);
