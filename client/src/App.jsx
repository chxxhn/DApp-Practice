import React, { useState, useEffect } from "react";
import { useSDK } from "@metamask/sdk-react";
import Web3 from "web3";
import abi from "./abi.json";

const CONTRACT_ADDRESSES = [
  { label: "Default NFT Contract", value: "0x05a8C5aFa171aFAE09218a9270ECe34Dd32CbdCD" },
];

const App = () => {
  const { sdk, connected, chainId } = useSDK();
  const [account, setAccount] = useState(null);
  const [selectedContract, setSelectedContract] = useState(CONTRACT_ADDRESSES[0].value);
  const [mintTo, setMintTo] = useState("");
  const [nftId, setNftId] = useState("");
  const [message, setMessage] = useState("");

  // Connect wallet and fetch accounts
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setMessage("MetaMask is not installed. Please install MetaMask!");
        return;
      }

      // Request accounts using `eth_requestAccounts` instead of `selectedAddress`
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setMessage("Wallet connected successfully!");
      } else {
        setMessage("No accounts found. Please connect your MetaMask wallet.");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setMessage("Failed to connect wallet. Please try again.");
    }
  };

  // Event listener for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setMessage(`Account changed to ${accounts[0]}`);
        } else {
          setAccount(null);
          setMessage("Disconnected from MetaMask.");
        }
      });

      // Optional: Handle network changes
      window.ethereum.on("chainChanged", (chainId) => {
        console.log("Network changed to:", chainId);
        window.location.reload(); // Reload to avoid state inconsistencies
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => { });
        window.ethereum.removeListener("chainChanged", () => { });
      }
    };
  }, []);

  // Mint NFT
  const mintNFT = async () => {
    if (!account) {
      setMessage("Please connect your wallet first.");
      return;
    }

    if (!mintTo || !Web3.utils.isAddress(mintTo)) {
      setMessage("Please enter a valid address for minting.");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(abi, selectedContract);

      setMessage("Minting in progress...");
      await contract.methods
        .safeMint(mintTo, nftId)
        .send({
          from: account,
          gas: 200000,
        });

      setMessage(`Successfully minted NFT with ID: ${nftId} to address: ${mintTo}`);
    } catch (error) {
      console.error("Minting failed:", error);
      setMessage("Minting failed. Please check the console for details.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">NFT Minting DApp</h1>

      {/* Connect Wallet Button */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-primary"
          onClick={connectWallet}
          disabled={connected && account} // Disable if already connected
        >
          {connected && account ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </div>

      {/* Wallet Info */}
      {connected && account && (
        <div className="card mx-auto" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="card-title">Wallet Information</h5>
            <p className="card-text">
              <strong>Connected Account:</strong> {account}
            </p>
            <p className="card-text">
              <strong>Connected Chain:</strong> {chainId}
            </p>
          </div>
        </div>
      )}

      {/* Mint NFT Section */}
      {connected && account && (
        <div className="card mx-auto mt-4" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="card-title">Mint Your NFT</h5>
            <div className="mb-3">
              <label className="form-label">NFT Contract Address</label>
              <select
                className="form-select"
                value={selectedContract}
                onChange={(e) => setSelectedContract(e.target.value)}
              >
                {CONTRACT_ADDRESSES.map((contract) => (
                  <option key={contract.value} value={contract.value}>
                    {contract.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">To Address</label>
              <input
                type="text"
                className="form-control"
                value={mintTo}
                onChange={(e) => setMintTo(e.target.value)}
                placeholder="Enter recipient address"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">NFT ID</label>
              <input
                type="text"
                className="form-control"
                value={nftId}
                onChange={(e) => setNftId(e.target.value)}
                placeholder="Enter NFT ID"
              />
            </div>
            <button className="btn btn-success w-100" onClick={mintNFT}>
              Mint NFT
            </button>
          </div>
        </div>
      )}

      {/* Status Message */}
      {message && (
        <div className="alert alert-info mt-4 text-center" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default App;

