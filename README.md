# React Native Crypto Wallet

Welcome to the React Native Crypto Wallet project! This mobile application serves as a crypto wallet, allowing users to import Bitcoin or Polygon wallets using private keys, make transactions, and view previous transaction history. 

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Import Wallets**: Users can securely import their Bitcoin or Polygon wallets by providing their private keys.
2. **Transaction Management**: Users can make cryptocurrency transactions directly from the app, sending funds to other wallets.
3. **Transaction History**: The app provides a comprehensive transaction history, allowing users to view their previous transactions.
4. **Security**: Wallets and private keys are stored securely and encrypted to ensure user safety.
5. **Multi-Currency Support**: The app supports both Bitcoin and Polygon cryptocurrencies.

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

- `react`: A JavaScript library for building user interfaces.
- `react-native`: A framework for building native applications using React.
- `axios`: A promise-based HTTP client for making API requests.
- `ethers`: A JavaScript library for interacting with Ethereum and Ethereum-like networks.
- `bitcoinjs-lib`: A library for handling Bitcoin-related cryptographic functions.
- `mobx`: A state management library for React applications.
- `mobx-react`: A React integration for MobX.
- `react-navigation`: A routing and navigation library for React Native apps.
- `react-native-vector-icons`: A library that provides customizable icons for React Native.
- `react-native-keychain`: A library for securely storing sensitive data such as private keys.

Make sure to install these dependencies using your package manager before running the app.

Additionally, you may need to install some polyfill libraries to ensure compatibility across different platforms:

- `babel-preset-react-native`: Babel preset for React Native applications.
- `react-native-crypto`: A polyfill for the `crypto` module in React Native.
- `react-native-get-random-values`: A polyfill for the `crypto.getRandomValues` function in React Native.

You can install these polyfills using the following commands:

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

 Feel free to use, modify, and distribute the code for personal or commercial purposes.