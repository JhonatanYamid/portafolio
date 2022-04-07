import About from "../components/about";
import Brands from "../components/brands";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout/Layout";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
  
  return (
    <Layout>
      <div className="space-y-10">
        <Jumbotron />
        <Brands />
        <About />
        {/* <Skills /> */}
        <Projects />
      </div>

    </Layout >
  )
}
