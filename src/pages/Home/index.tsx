import { Typography } from "@material-tailwind/react";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import qrcode from "../../images/qrcode.png";
import RibeirinhoSVG from "../../svg/river-svgrepo-com.svg";
import { CarouselDefault } from "../../components/carousel";
import { CardGrid } from "../../components/card-grid";

export const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-home bg-no-repeat bg-cover bg-center bg-fixed py-24 px-10 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col">
            <Card>
              <Typography variant="h1">Seja bem-vindo!</Typography>
              <Typography variant="lead">
                Nossa missão é aproximar o vocacionado de sua vocação.
              </Typography>
            </Card>

            <Card center={true}>
              <Typography variant="h4">
                Nos ajude a continuar fazendo a obra.
              </Typography>
              <Typography variant="lead">
                Contribua a partir do QR CODE abaixo
              </Typography>

              <img
                className="w-1/2 rounded-lg object-cover object-center"
                src={qrcode}
              />
            </Card>
          </div>

          <div className="m-4 w-1/2">
            <CarouselDefault />
          </div>
        </div>

        <div>
          <Typography variant="h1" className="text-white">
            Conheça alguns segmentos
          </Typography>

          <div className="flex flex-row justify-center gap-5 px-20 flex-wrap">
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
            <CardGrid center={true}>
              <Typography variant="h4">Ribeirinhos</Typography>
              <img src={RibeirinhoSVG} className="w-10" />
            </CardGrid>
          </div>
        </div>
      </div>
    </div>
  );
};
