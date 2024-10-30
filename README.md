# Delivery App frontend Vlad Bertsel

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Functionality overview

## Apps:

- Customer - ervice for registered users
- Users - Service for non-registered users
- Onwers - Service for restaurant owners
- Admins - Service for Admins
  Run `npx nx graph` to visually explore what got created. Now, let's get you up to speed!

### Modern Angular features:

- State management using NgRx Signals Store
- Signal inputs and outputs
- DI using the inject function
- Functional resolvers and guards

## Functionality overview

## Run tasks

1. npx nx build users
2. npx nx build customers
3. npx nx build owners
4. npx nx build admins

## Generate libraries

- `npx nx g @nrwl/angular:library --name=example --directory=example/example --tags=scope:example,type:example `

## Requirements

## Requirements

- npm: 10.1.1

#### Folders/Libs structure

```
├── libs
│   ├──features
│   │   ├── admin-delivery-features
│   │   ├── customer-delivery-features
│   │   ├── owner-delivery-features
│   │   ├── user-delivery-features
│   ├── auth
│   │   ├── data-access
│   │   ├── feature-auth
│   ├── core
│   │   ├── api-types
│   │   ├── error-handler
│   │   ├── http-client
│   │   ├── forms
│   ├── data-acess
│   │   ├──api-types
│   │   ├──
│   ├── data-acess
|   ├── store
|   |   ├── store-delivery-owner
|   |   ├── store-delivery-user
|   |   ├── store-delivery-admin
|   |   ├── store-delivery-customer
│   ├── shared
│   │   ├── components
|   |   ├── ui-layout

```
