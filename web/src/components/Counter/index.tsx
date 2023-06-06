import { Button, Col, Row, Space } from 'antd';
import { memo, useState } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Row gutter={[30, 30]}>
      <Col span={12}>
        <Space>
          <Button onClick={() => setCounter((n) => n + 1)}>Increment</Button>
          <Button onClick={() => setCounter((n) => n - 1)}>Increment</Button>
          <p>{counter}</p>
        </Space>
      </Col>
    </Row>
  );
};

export default memo(Counter);
