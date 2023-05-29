import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO title={"About - " + globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="p-2 w-full">
        <h1 className="text-3xl dark:text-white mb-6">About</h1>
        <p>Hi, my name is Justin Martinez. I'm a hobbyist programmer, outrigger canoe paddler, and structural engineer in Northern California. Welcome to my portfolio and blog. This site is just a little portfolio website of toy projects I work on and neat tips and tricks I figure out along the way. These things might be related to structural engineering, programming, ChatGPT and AI, work, grit and grind, and paddling. Hope you you enjoy.</p>

        <h2 className="text-2xl mt-9 mb-3">Outrigger Canoe Paddling</h2>
        <p>I paddle with O Kalani Outrigger in Alameda, CA.</p>

        <h2 className="text-2xl mt-9 mb-3">Civil and Structural Engineering</h2>
        <p>I'm a structural engineer in California.</p>
      </main>

      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}


export function getStaticProps() {
  const globalData = getGlobalData(); 

  return { props: { globalData } };
}
