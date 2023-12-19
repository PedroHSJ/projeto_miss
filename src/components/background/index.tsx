import { Content } from "antd/es/layout/layout";

export const BackgroundImage = ({ children }) => {
  return (
    <Content
      className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed py-24 px-10 flex flex-col justify-center"
      style={{
        backgroundImage: "url('./src/images/amazonia.jpg')",
      }}
    >
      {children}
    </Content>
  );
};
