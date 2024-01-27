const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");

async function findByMint() {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);

    const mintAddress = new PublicKey("H96snRf6wA4MWdP78BTorLnWFJdDSRqLhjrcmqtagJk6");
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    console.log(nft);
};

findByMint();