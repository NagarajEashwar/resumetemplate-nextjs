import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import Meta from './Meta';

export default function Layout(props) {
  return (
    <section
      className={`layout ${props.pathname == 'info' && 'info_page'}`}
      style={{
        backgroundColor: `${props.bgColor && props.bgColor}`,
        color: `${props.pathname == 'info' && 'white'}`,
      }}
    >
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header data={props.main} siteTitle={props.siteTitle} />
      <About data={props.main} />
      <Resume data={props.resume} />
      <Testimonials data={props.testimonials} />
      <Footer data={props.main} />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
    </section>
  )
}
