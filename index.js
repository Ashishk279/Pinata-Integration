const pinataSDK = require("@pinata/sdk");
require("dotenv").config();
const fs = require("fs");
const pinata = new pinataSDK(process.env.API_Key, process.env.Private_Key);

const readableStreamForFile = fs.createReadStream("./images/Avtar.jpg");
const options = {
  pinataMetadata: {
    name: "My Awesome NFT",
    keyvalues: {
      customKey: "customValue",
      customKey2: "customValue2",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
};

const pinFileToIPFS = () => {
  return pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

const pinJSONToIPFS = (body) => {
  return pinata
    .pinJSONToIPFS(body, options)
    .then((result) => {
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMetadata = async () => {
  const imageUrl = await pinFileToIPFS();
  const body = {
    name: "Solana NFT",
    description: "This is my awesome collection of NFTs",
    image: imageUrl,
  };
  const metadata = await pinJSONToIPFS(body);
  console.log(metadata);
};
getMetadata();

// https://gateway.pinata.cloud/ipfs/QmSqdxQX3Z9BZi3PHeCUch9H4rRDcp9P2tC3YsuzqZhU5x
// https://gateway.pinata.cloud/ipfs/QmTU3143zBETda9Y3r3v55HWw1oMed4AgMU5nvhj5Duy4P
// https://gateway.pinata.cloud/ipfs/QmVxBFvw4VNTzLFEaa8vMS8rUz5Up2bgubLxiAZ1pv2Jx7
// https://gateway.pinata.cloud/ipfs/QmW4ZizhiHXWdktbaCc2k3JFQij22rg5rA1UDpvHgtnKoY
