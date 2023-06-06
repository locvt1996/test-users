import { HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderCustom: React.FC = () => {
  const navigation = useNavigate();

  return (
    <Header>
      <Menu
        items={[
          {
            key: 'home',
            label: 'Home',
            icon: <HomeOutlined />,
            onClick: () => navigation('/'),
          },
        ]}
        mode="horizontal"
        theme="dark"
      />
    </Header>
  );
};

export default memo(HeaderCustom);
