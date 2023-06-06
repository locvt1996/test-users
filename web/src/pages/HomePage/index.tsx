import Counter from '@components/Counter';

import UserList from '@components/UserList';
import { Col, Row, Space, Spin } from 'antd';
import { useGetUsersQuery } from 'src/services/user';

const HomePage: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery(null);

  return (
    <Row gutter={[30, 30]}>
      <Col span={24}>
        <Spin spinning={isLoading}>
          <UserList data={data?.users} />
        </Spin>
      </Col>

      <Col span={24}>
        <Counter />
      </Col>
    </Row>
  );
};

export default HomePage;
