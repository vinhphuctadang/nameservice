# nameservice
**nameservice** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Get started

### Installation

```
curl https://get.starport.network/starport! | bash
```

### Start the local chain (1 node)

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.com).

### Context:

We want to construct a name service chain, which allows:

- Everyone can be a creator, to create a new name and become its owner

    - Name cannot be duplicated

- Owner of a name can set its price + sale status (for sale nor not for sale)

- Buyer (other than owner), can buy a created name and become new owner

    - When buyer successfully buys, his token will be transferred to owner
    - Owner of the name will be set to buyer

### Commands to test

```
starport chain serve
```

- Create a new name:

```
nameserviced tx nameservice create-name example 1000 true --from alice -y
```

- Check if new name created

```
nameserviced query nameservice info example
```

Output:

```
forSale: "true"
owner: cosmos1d666nk8lrlmlhwv3jfcfzuxdx6289ng6njzewk
price: 1000token
```

- Change sale status

```
nameserviced tx nameservice change-sale-status example 100 false --from alice
```

Query to check name information again:

```
nameserviced query nameservice info example
```

Output:

```
forSale: "false"
owner: cosmos1d666nk8lrlmlhwv3jfcfzuxdx6289ng6njzewk
price: 100token
```

- To buy a name (have to change sale status to true):

```
nameserviced tx nameservice buy example 100 --from bob -y
```

Yet should check name info again

```
forSale: "false"
owner: cosmos1zmktwk3w3g6fgh6mk95z6xmkya2qz5j0grk25p
price: 100token
```

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)
