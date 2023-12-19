import { Content } from "antd/es/layout/layout";
import BackgroundImageFlorest from "../../images/amazonia.jpg";
export const BackgroundImage = ({ children }) => {
  return (
    <div
      className="
      bg-home
      min-h-screen 
      bg-no-repeat 
      bg-cover 
      bg-center 
      bg-fixed 
      py-24 
      px-10 
      flex 
      flex-col 
      justify-center"
      //   style={{
      //     backgroundImage: "url('./src/images/amazonia.jpg')",
      //   }}
    >
      {children}
    </div>
  );
};
