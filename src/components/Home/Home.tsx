import React from 'react';
import { Icon } from 'antd';
import './home.less';
import { ReactComponent as IllustrationOne } from '../../assets/illustration_one.svg';
import pic from '../../assets/illustration_one.svg';
import { Heading, HeadingSub, HeadingGradient } from './Heading';
import Break from './Break';
import Test from './Test';
import ThirdSection from './ThirdSection';
const Home = () => (
  <div className="home-parent">
    <section id="firstPage" className="home-container-flex">
      <div className="home-container">
        <div className="home-content">
          <Test />
          <HeadingGradient color="white">Students</HeadingGradient>
          <Heading>Everything you need to get into your dream college</Heading>
          <HeadingSub>
            We offer what can be seen as a LinkedIn for prospective students and
            intellectuals. Students, professionals and institutions have the ...
          </HeadingSub>
        </div>
        <img src={pic} alt="ddddd" className="section-image" />
        <Break />
        <Heading />
      </div>
    </section>
    <section id="secondPage" className="second-container-parent">
      <div className="second-container">
        <div className="second-page-right">
          <div>
            <h1>Content on the right side</h1>
          </div>
        </div>
        <div className="second-page-left">
          <h1
            className="home-slogan"
            style={{
              color: 'var(--text-color-white)'
            }}
          >
            Everything you need to find your dream college
          </h1>
          <div className="slogan-item">
            <div id="slogan-icon">
              <Icon type="message" />
            </div>
            <div className="slogan-item-title">Intellectual Social Network</div>
            <div className="slogan-item-text">
              <p>
                We offer what can be seen as a LinkedIn for prospective students
                and intellectuals. Students, professionals and institutions have
                the option of connecting through our platform. Welcome to the
                service where colleges find YOU.
              </p>
            </div>
          </div>
          <div className="slogan-item">
            <div id="slogan-icon">
              <Icon type="link" />
            </div>

            <div className="slogan-item-title">
              University, Grant and Scholarship Search
            </div>
            <div className="slogan-item-text">
              <p>
                We offer a comprehensive grant and scholarship search and we
                match you based on your profile. Gone are the days of hour long
                daily research.
              </p>
            </div>
          </div>
          <div className="slogan-item">
            <div id="slogan-icon">
              <Icon type="profile" />
            </div>
            <div className="slogan-item-title">
              Seamless Institution Experience
            </div>
            <div className="slogan-item-text">
              <p>
                We make it simple to find the type of students YOU want. The
                type of student that fits YOUR culture and values. We value
                diversity of opinion and thought and we are providing a way for
                you to embody those values within your own organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Break color="#16171a" />
    </section>
    <ThirdSection />
  </div>
);

export default Home;
