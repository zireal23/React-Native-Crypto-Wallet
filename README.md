# React Native Crypto Wallet

<div align="center">
  <img src="./assets/yo.jpg" alt="Crypto Wallet Icon" width="200px" height="200px">
</div>

Welcome to the React Native Crypto Wallet project! This mobile application serves as a crypto wallet, allowing users to import Bitcoin or Polygon wallets using private keys, make transactions, and view previous transaction history. 

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **Import Wallets**: Users can securely import their Bitcoin or Polygon wallets by providing their private keys.

💸 **Transaction Management**: Users can make cryptocurrency transactions directly from the app, sending funds to other wallets.

📚 **Transaction History**: The app provides a comprehensive transaction history, allowing users to view their previous transactions.

🔒 **Security**: Wallets and private keys are stored securely and encrypted to ensure user safety.

💱 **Multi-Currency Support**: The app supports both Bitcoin and Polygon cryptocurrencies.

## Installation

To run the React Native Crypto Wallet project locally, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-native-crypto-wallet.git
```

2. Change to the project's directory:

```bash
cd react-native-crypto-wallet
```

3. Install the dependencies using your preferred package manager. For example, with npm:

```bash
npm install
```

or with yarn:

```bash
yarn install
```

## Usage

To start the React Native Crypto Wallet app, use the following command:

```bash
npm start
```

or

```bash
yarn start
```

This command will start the Metro server, and you can choose to run the app on a physical device or an emulator.

## Dependencies

The React Native Crypto Wallet project relies on the following dependencies:

- ![React Logo](./assets/react.png) `react`: A JavaScript library for building user interfaces.
- ![React Native Logo](./assets/react-native.png) `react-native`: A framework for building native applications using React.
- ![Axios Logo](./assets/axios.png) `axios`: A promise-based HTTP client for making API requests.
- ![Ethers Logo](ethers-icon.png) `ethers`: A JavaScript library for interacting with Ethereum and Ethereum-like networks.
- ![BitcoinJS Logo](bitcoinjs-icon.png) `bitcoinjs-lib`: A library for handling Bitcoin-related cryptographic functions.
- ![MobX Logo](mobx-icon.png) `mobx`: A state management library for React applications.
- ![MobX React Logo](mobx-react-icon.png) `mobx-react`: A React integration for MobX.
- ![React Navigation Logo](react-navigation-icon.png) `react-navigation`: A routing and navigation library for React Native apps.
- ![React Native Vector Icons Logo](vector-icons-icon.png) `react-native-vector-icons`: A library that provides customizable icons for React Native.
- ![React Native Keychain Logo](keychain-icon.png) `react-native-keychain`: A library for securely storing sensitive data such as private keys.

Make sure to install these dependencies using your package manager before running the app.

Additionally, you may need to install some polyfill libraries to ensure compatibility across different platforms:

- `babel-preset-react-native`: Babel preset for React Native applications.
- `react-native-crypto`: A polyfill for the `crypto` module in React Native.
- `react-native-get-random-values`: A polyfill for the `crypto.getRandomValues` function in React Native.

You can install these polyfills using the following

 commands:

```bash
npm install --save-dev babel-preset-react-native
npm install --save react-native-crypto react-native-get-random-values
```

or

```bash
yarn add --dev babel-preset-react-native
yarn add react-native-crypto react-native-get-random-values
```

## Contributing

Contributions to the React Native Crypto Wallet project are welcome! If you have any ideas, suggestions, or bug fixes, please submit a pull request. Make sure to follow the project's code style and guidelines.

## License

The React Native Crypto Wallet project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).