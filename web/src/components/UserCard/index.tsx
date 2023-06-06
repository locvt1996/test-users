import { Card } from 'antd';
import { memo } from 'react';
import { UserItem } from 'src/services/user/types';

export type UserCardProps = UserItem;

const UserCard: React.FC<UserCardProps> = ({ name }: UserCardProps) => {
  return (
    <Card title={name} style={{ width: 300 }}>
      <p>{name}</p>
    </Card>
  );
};

export default memo(UserCard);
