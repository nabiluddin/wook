import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  paperWallet,
  trustWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";
export default function App() {
  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId="YOUR_CLIENT_ID"
      supportedWallets={[
        metamaskWallet(),
        paperWallet({
          paperClientId: "YOUR_PAPER_CLIENT_ID",
        }),
        trustWallet(),
        rainbowWallet(),
      ]}
    >
      <ConnectWallet theme={"dark"} />
    </ThirdwebProvider>
  );
}