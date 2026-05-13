import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetQuote, { type VehicleInfo } from "../components/GetQuote";
import { lookupVehicle } from "../actions/lookupVehicle";

export const metadata = {
  title: "Get a Quote | Range Rover Engines",
  description: "Request a free quote for Range Rover or Land Rover engine repair, replacement, or rebuild.",
};

interface Props {
  searchParams: Promise<{ reg?: string }>;
}

export default async function GetQuotePage({ searchParams }: Props) {
  const { reg } = await searchParams;

  let notFound = false;
  let vehicleInfo: VehicleInfo | undefined;

  if (reg?.trim()) {
    const result = await lookupVehicle(reg.trim());
    if (result.ok) {
      vehicleInfo = { description: result.vehicle.description, data: result.vehicle };
    } else {
      notFound = true;
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[66px]">
        <GetQuote
          initialReg={reg ?? ""}
          showNotFound={notFound}
          vehicleInfo={vehicleInfo}
        />
      </main>
      <Footer />
    </div>
  );
}
