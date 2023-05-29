import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Now({ globalData }) {
  return (
    <Layout>
      <SEO title={"Now - " + globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="p-2 w-full">
        <h1 className="text-3xl dark:text-white mb-6">Now</h1>
        <p>Some projects I'm working on right now.</p>
      </main>

      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}


export function getStaticProps() {
  const globalData = getGlobalData(); 

  return { props: { globalData } };
}
