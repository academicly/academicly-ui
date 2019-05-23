import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const UniversityCard = (props: {
  name: React.ReactNode;
  description: React.ReactNode;
}) => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title={props.name}
      description={props.description}
    />
  </Card>
);

export default UniversityCard;
