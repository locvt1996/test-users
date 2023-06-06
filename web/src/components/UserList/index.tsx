import UserCard from '@components/UserCard';
import { Col, Row } from 'antd';
import { memo } from 'react';
import { UserItem } from 'src/services/user/types';

export type UserListProps = {
  data?: UserItem[];
};

const UserList: React.FC<UserListProps> = ({ data }: UserListProps) => {
  if (!data) return null;

  return (
    <Row gutter={[30, 30]}>
      {data.map((item) => (
        <Col key={item.id} span={24}>
          <UserCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default memo(UserList);
