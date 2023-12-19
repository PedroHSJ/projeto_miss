import { NavBar } from "../../components/header";
import { Card } from "../../components/card";
import qrcode from "../../images/qrcode.png";
import RibeirinhoSVG from "../../svg/river-svgrepo-com.svg";
import { CardGrid } from "../../components/card-grid";
import { Layout, Typography } from "antd";
import { TextCard } from "../../components/TextCard";
import { Content, Footer } from "antd/es/layout/layout";
import { BackgroundImage } from "../../components/background";

export const Home = () => {
  const { Title, Text } = Typography;
  return (
    <Layout>
      <NavBar defaultSelectedKey="1" />
      <BackgroundImage>
        <Content>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <Card>
                <Title level={1}>Seja bem-vindo!</Title>
                <Title level={4}>
                  Nossa missão é aproximar o vocacionado de sua vocação.
                </Title>
              </Card>

              <Card center={true}>
                <Title level={4}>Nos ajude a continuar fazendo a obra.</Title>
                <Title level={5}>Contribua a partir do QR CODE abaixo</Title>

                <img
                  className="w-1/2 rounded-lg object-cover object-center"
                  src={qrcode}
                />
              </Card>
            </div>

            <div className="m-4 w-1/2"></div>
          </div>

          <div>
            <Title
              level={1}
              style={{
                color: "white",
              }}
            >
              Povos não alcançados
            </Title>

            <div className="flex flex-row justify-center gap-5 px-20 flex-wrap">
              <CardGrid>
                <TextCard>Ribeirinhos</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Sertanejos</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Ciganos</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Indigenas</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Quilombolas</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Imigrantes</TextCard>
              </CardGrid>
              <CardGrid>
                <TextCard>Surdos</TextCard>
              </CardGrid>
            </div>
          </div>
        </Content>
      </BackgroundImage>
      <Footer style={{ textAlign: "center" }}>PHSJ Design ©2023</Footer>
    </Layout>
  );
};
