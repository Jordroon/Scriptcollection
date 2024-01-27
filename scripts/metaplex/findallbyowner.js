const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");


async function findAllByOwner() {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);

    const publicKey = new PublicKey("33Jaq3FzXtCLXgWfQ4gdZgP6KKtBf6EQsStGtwVQ51Bj");
    const myNfts = await metaplex.nfts().findAllByOwner({
        owner: metaplex.identity().publicKey,
        publicKey
    });
    console.log(myNfts);
};

findAllByOwner();