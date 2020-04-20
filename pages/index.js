import matter from 'gray-matter'
import Layout from '../components/Layout'
import Header from '../components/Header';
import $ from 'jquery';

const Index = props => {
  return (
    <Layout
      pathname="/"
      resume={props.resume}
      main={props.main}
      testimonials={props.testimonials}
      siteTitle='Profile'
      siteDescription='Resume Template'
    >
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  return {
    props: {
      title: siteConfig.default.title,
      description: siteConfig.default.description,
      resume: siteConfig.resume,
      main: siteConfig.main,
      testimonials: siteConfig.testimonials
    },
  }
}