import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>wooRiShop | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
