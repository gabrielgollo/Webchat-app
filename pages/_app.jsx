import Theme from '../theme/theme';
import Layout from '../layout';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { ToastContainer } from 'react-toastify';
function App({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Theme>
        <CssBaseline />
        <ToastContainer />
        <Layout suppressHydrationWarning>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </React.Fragment>
  );
}

export default App;