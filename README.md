# Equal Experts Currency Converter Microservice

## Service Summary

A currency conversion utilities API Repo.

Version: 5b8d0fd276b6d288905ed2f63a934e057e8feca2

## Prerequisites

- [Node v16.13.2](https://nodejs.org/en/download/)

## Installation

Clone this repository.

Run the following command:

```bash
$ npm install
```

## Running the service

To start the project:

```bash
# production
$ npm run start

# development
$ npm run start:dev

```

## Running tests

To run tests:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Read service docs

To read the open api docs for this service and try the api endpoints.

```bash
# start the service
npm start

# navigate to the following url in the browser: http://localhost:3001/docs
```

## Example endpoints

To get all rates relative to a currency code.

```bash
curl --silent http://localhost:3001/api/v1/currency/rates/EUR | json_pp
```

Implement an End Point which can return the exchange rate from Euro to Dollars.

```bash
curl --silent http://localhost:3001/api/v1/currency/rate/EUR/USD | json_pp
```

Extend your solution to convert US dollars to British Pounds.

```bash
curl --silent http://localhost:3001/api/v1/currency/convert/10.00/USD/GBP | json_pp
```

Extend your solution to convert Euro to British Pounds.

```bash
curl --silent http://localhost:3001/api/v1/currency/convert/10.00/EUR/GBP | json_pp
```

Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD.

```bash
curl --silent http://localhost:3001/api/v1/currency/add/13.12/EUR/99/GBP/CAD | json_pp
```
