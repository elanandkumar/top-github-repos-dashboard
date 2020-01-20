import Header from '~/components/Header';
import Footer from '~/components/Footer';

const PageLayout = props => (
  <>
    <Header />
    {props.children}
    <style jsx global>{`
    :root {
      --primary-bg-color: rgb(31, 40, 46);
      --primary-text-color: white;
    }
      html,
      body {
        margin: 0;
        padding: 0;
      }
      h1, h2, h3, h4, h5 {
        margin-top: 0px;
        margin-bottom: 10px;
      }
    `}</style>
    <Footer />
  </>
);

export default PageLayout;
