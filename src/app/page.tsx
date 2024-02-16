import { Home } from "@/components/home";
import { CryptoProvider } from "@/providers/CryptoProvider";

export default function Index() {
  return (
    <CryptoProvider>
      <Home />
    </CryptoProvider>
  );
}
