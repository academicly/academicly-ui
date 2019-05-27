import React from 'react';
import { styled } from 'linaria/react';
import { MediaQuery } from '../Layout';
import { Icon } from 'antd';

const Container = styled.section`
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    (var(--secondary-color)),
    var(--primary-color)
  );
`;

const Section = styled.div`
  max-width: 1200px;
  padding: 0 8%;
  margin: 0 auto;
  ${MediaQuery.phone} {
    padding: 0 0;
    margin: 0 5%;
  }
`;

const SectionItems = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 25px;
  padding: 130px 0;
  ${MediaQuery.desktopSM} {
    grid-template-columns: auto auto;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    padding: 100px 0;
  }
  ${MediaQuery.phone} {
    padding: 50px 0;
    grid-template-columns: auto;
    grid-column-gap: 16px;
  }
`;

const SectionItem = styled.div`
  margin-bottom: 1em;
  ${MediaQuery.phone} {
    svg {
      display: none;
    }
  }
`;

const ItemTitle = styled.h2`
  text-align: center;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.67;
  letter-spacing: -0.2px;
  color: var(--text-color);
  ${MediaQuery.desktopSM} {
    font-size: 20px;
  }
  ${MediaQuery.phone} {
    text-align: start;
  }
`;

const ItemDesc = styled.p`
  max-width: 280px;
  text-align: center;
  margin: 0 auto;
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-color-secondary);
  ${MediaQuery.desktopSM} {
    font-size: 14px;
    margin-top: 10px;
  }
  ${MediaQuery.phone} {
    text-align: start;
  }
`;
const SectionMain = () => (
  <Container>
    <Section>
      <SectionItems>
        <SectionItem>
          <Icon type="message" />
          <ItemTitle>Intellectual Social Network</ItemTitle>
          <ItemDesc>
            We offer what can be seen as a LinkedIn for prospective students and
            intellectuals. Students, professionals and institutions have the
            option of connecting through our platform. Welcome to the service
            where colleges find YOU.
          </ItemDesc>
        </SectionItem>
        <SectionItem>
          <Icon type="message" />
          <ItemTitle>Intellectual Social Network</ItemTitle>
          <ItemDesc>
            We offer what can be seen as a LinkedIn for prospective students and
            intellectuals. Students, professionals and institutions have the
            option of connecting through our platform. Welcome to the service
            where colleges find YOU.
          </ItemDesc>
        </SectionItem>
        <SectionItem>
          <Icon type="message" />
          <ItemTitle>Intellectual Social Network</ItemTitle>
          <ItemDesc>
            We offer what can be seen as a LinkedIn for prospective students and
            intellectuals. Students, professionals and institutions have the
            option of connecting through our platform. Welcome to the service
            where colleges find YOU.
          </ItemDesc>
        </SectionItem>
        <SectionItem>
          <Icon type="message" />
          <ItemTitle>Intellectual Social Network</ItemTitle>
          <ItemDesc>
            We offer what can be seen as a LinkedIn for prospective students and
            intellectuals. Students, professionals and institutions have the
            option of connecting through our platform. Welcome to the service
            where colleges find YOU.
          </ItemDesc>
        </SectionItem>
      </SectionItems>
    </Section>
  </Container>
);

export default SectionMain;
