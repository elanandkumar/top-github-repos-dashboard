import Header from '~/components/Header';
import Footer from '~/components/Footer';

const PageLayout = props => (
  <>
    <Header />
    {props.children}
    <style jsx global>{`
      html,
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
    <Footer />
  </>
);

export default PageLayout;
