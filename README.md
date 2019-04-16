# Mapping Contract with Tests

This truffle testing suite tests some of the basic functionalities of an Ethereum smart contract which uses mapping.

### Prerequisites

- You will need `NodeJS` v8.9.4 or later. `NodeJS` and installation instructions can be found for all major operating systems at: `https://nodejs.org/en/download/`.

- You will need `truffle` installed globally. If you haven't done so: 

```shell
$ npm install -g truffle
```
Ensure that it was installed correctly by running:

```shell
$ truffle version
```

You should see 

```shell
Truffle v5.0.7 (core: 5.0.7)
Solidity v0.5.0 (solc-js)
```

### Installing

- Clone this repo to your local machine using `https://github.com/ptstory/mapping-contract.git`
- Note that there are no npm packages required to run the program, therefore a `node_modules` folder and `package.json` has not been included.

## Using the program

After cloning the repo, navigate to the directory containing `truffle.js` and run:

```shell
$ truffle version
```

You should see 

```shell
Truffle v5.0.7 (core: 5.0.7)
Solidity v0.5.0 (solc-js)
```

Notice that the `Solidity` compiler version is the same as what you saw before. Unlike a previous assignment, there is no need to specify a different compiler version in `truffle.js`.

Run the test suite with:

```shell
$ truffle test
```

There is no need to compile the contract or run them migrations first, as `truffle test` will do it all at once.

After creating and deploying the contracts, I wrote the `truffle` test file found in the `tests` folder to
test each of the functions defined in `Courses.sol`. The `truffle test` command run in the console above executes any test files included in the `tests` folder. Complete test coverage can be seen below:

![Image of complete test coverage](images/complete_test_coverage.png?raw=true)

## Making the contract compatible with solidity ^0.5.0

The contract shown in the tutorial was written for `solidity ^0.4.18` and would not compile at version `^0.5.0` without a few modifications:

- Line 1 was changed from `pragma solidity ^0.4.18;` to `pragma solidity ^0.5.0;` to specify the new version

- The `setInstructor()`, `getInstructors()`, and `getInstructor()` functions found at line 14, 24, and 28 were changed to include `memory` as explicit data locations for their parameters as well as return variables.

- The `var` declaration in line 15 was changed to the explicit type `Instructor` as `var` is now disallowed.

## Authors

* **Perry Story** - (https://github.com/ptstory)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Dr. Juan Banda for the assignment
* Learning materials used: https://coursetro.com/posts/code/102/Solidity-Mappings-&-Structs-Tutorial and countless Ethereum Stack Exchange questions