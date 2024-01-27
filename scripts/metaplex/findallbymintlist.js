const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");

async function findByMintList() {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);

    const mintA = new PublicKey("HeT3SNwj8pJYaFKj6nZs9UA5KnkJ2dXtCAV4dEWCpHVa");
    const mintB = new PublicKey("EYexnLcrA8iPaQFGyBE4NpbTNbShoazck5TTRBGAkuQ4");
    const [nftA, nftB] = await metaplex.nfts().findAllByMintList({
    mints: [mintA, mintB]
});
    console.log(nftA,nftB);
};

findByMintList();