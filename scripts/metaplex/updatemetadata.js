const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const { Metaplex} = require("@metaplex-foundation/js");


async function createMetaData() {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const wallet = Keypair.generate();
    const metaplex = new Metaplex(connection);

    const { nft } = await metaplex.nfts().create({
        uri: "https://arweave.net/123",
        name: "My NFT",
        sellerFeeBasisPoints: 500, // Represents 5.00%.
    });
    console.log(nft)
    console.log(wallet)
};

createMetaData();