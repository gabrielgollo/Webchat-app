import Layout from '../layout';
import '../styles.css'
function App({ Component, pageProps }) {
  return (
    <Layout suppressHydrationWarning>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;