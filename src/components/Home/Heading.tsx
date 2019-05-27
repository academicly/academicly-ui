import { styled } from 'linaria/react';
import { MediaQuery } from '../Layout';

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${props => (props.color ? props.color : 'var(--text-color)')};
  line-height: 1.2;
  margin-bottom: 18px;
  ${MediaQuery.phone} {
    font-size: 32px;
  }
`;

export const HeadingGradient = styled(Heading)`
  display: inline-block;
  padding: 10px 15px;
  margin-top: 0;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-image: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  border-radius: 8px;
`;

export const HeadingSub = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-top: 24px;
`;
