const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");

async function uploadMetaData() {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: "My NFT",
        description: "My description",
        image: "https://arweave.net/123",
    });
    
    console.log(uri)
};

uploadMetaData();