import FeaturedVehicles from "./components/FeaturedVehicles.jsx";
import ClientSide from "./components/Home.jsx";
import { assets, cityList } from "./frontend-assets/assets.js";

export const metadata = {
  title: "CarRental | Home",
  description: "Book your happy ride now",
};

export default function HomePage() {
  return (
  <>
  <ClientSide assets={assets} cityList={cityList} />;
  <FeaturedVehicles />
  </>
  )
}