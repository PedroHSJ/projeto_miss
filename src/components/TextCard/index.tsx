import { Typography } from "antd";

export const TextCard = ({ children }) => {
  const { Title } = Typography;

  return (
    <Title level={4} style={{ color: "white" }}>
      {children}
    </Title>
  );
};
