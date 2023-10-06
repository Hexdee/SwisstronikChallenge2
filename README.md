# Basic Storage Contract

This project demonstrates a contract with the following features:

- A single private state variable (you can choose between a number or a string)
- A function to set this variable with a new value that differs from the default value
- A public function to return the current value of the state variable

It was deployed to the Mumbai testnet and the Swisstronik testnet

Write a script that performs the following tasks for both networks:

Retrieves the value of the state variable (slot#0) from the deployed smart contract using the eth_getStorageAt() RPC method

### Deployed Contract Address

On Mumbai : [0xf8772993DB265e751e8BDbBDbDD13406603b1c5e](https://mumbai.polygonscan.com/address/0xf8772993DB265e751e8BDbBDbDD13406603b1c5e)

On Swisstronik : [0x4999a9aCB86547a26A93E29572c019DFFbCCd98b](https://explorer-evm.testnet.swisstronik.com/address/0x3F042A7cd5f7dE394bc74a1310E3BcF2eBB9Ac3C)

### Build

To compile contracts, use following command:

```sh
npm run compile
```

### Deployment

Create `.env` file from example

```sh
cp example.env .env
```

Add `PRIVATE_KEY` in `.env` with actual private key to interact with network. If you're using other network than local testnet you also should replace `url` in `hardhat.config.ts`

### Deploy

To deploy contract to `Swisstronik`

```sh
npx hardhat run scripts/deploy.js
```

To deploy contract to `Mumbai`

```sh
npx hardhat run scripts/deploy.js --network mumbai
```

### Call getStorageAt

```sh
npx hardhat run scripts/getStorageAt.js
```

Example response

```js
Value store in smart contract:  2

Calling getStorageAt on mumbai...
Decoded result:  2

Calling getStorageAt on swisstronik...
Decoded result:  5.394671338996928e+76
```
