import { Layout } from 'antd';
import { memo } from 'react';

const { Footer } = Layout;

const FooterCustom: React.FC = () => {
  return <Footer style={{ textAlign: 'center' }}>Users ©2023 Created by Loc Vo</Footer>;
};

export default memo(FooterCustom);
