import { Home } from "@/components/home";
import { CoinProvider } from "@/providers/CoinProvider";
import { PriceProvider } from "@/providers/PriceProvider";

export default function Index() {
  return (
    <CoinProvider>
      <PriceProvider>
        <Home />
      </PriceProvider>
    </CoinProvider>
  );
}
