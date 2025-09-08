# Poll app

## Table of contents 
1. [Summary](#summary)  
2. [Installation](#installation)  
3. [Packages](#packages) <br/>
3.1 [types](#types) <br/>
3.2 [store](#store) <br/>
4. [Apps](#apps) <br/>
4.1 [backend](#backend)  <br/>
4.2 [mobile](#mobile)  <br/>
4.3 [web](#web)  

## Summary

This is a monorepo sharing business logic and entity schema types, leveraging <strong>Turborepo</strong> under the hood for efficient dependency distribution.

## Installation

<strong>Yarn is the recommended package manager for this project!</strong>

Make sure ports 5001, 3000 and 8081 are available on your environment.

Since this project is a monorepo, Turborepo helps us start each app concurently without a hassle. Simply run each command on the root directory:

```bash
// install dependencies
yarn

// start all apps
yarn dev
```

Unfortunately there are no build configurations at the moment.

## Packages

Shared packages between apps.

### types

Types representing entity schemas or basic types that any app or package need to access.

### store

Powered by <strong>Redux Toolkit</strong> and <strong>RTK Query</strong>, this package is responsible for the entire server-state related business logic and API, alongside regular redux responsibilites with centralized state management for front-end apps. RTK Query helps with automatic caching on the redux store and code splitting with it's out of the box approach. This way business logic and rendering state are splitted gracefully.

<strong>config/store:</strong> Main redux configuration. <br/>
<strong>config/api:</strong> Basic API configuration with RTK Query's built-in fetchBaseQuery. <br/>
<strong>Provider:</strong> Redux provider, should wrap around the actual application. <br/>

## Apps

Core applications.

### backend

Built with Nest.js, this application implements design patterns to maintain a clean and scalable code.

<strong>Validation:</strong> Pipeline with <strong>class-validator</strong> is set up with the whitelist: true option, so any properties not explicitly defined in the DTO are automatically stripped away before reaching the service layer.

<strong>Repository pattern:</strong> To mimic persistent in memory data storage without a database, this application uses a repository pattern that abstracts the data handling logic. 

<strong>Structure:</strong> <br/>
<strong>polls.repository.ts:</strong> Implements data storage and retrieval methods. <br/>
<strong>polls.service.ts:</strong> Main orhcestrator and service consumer of poll related actions. <br/>
<strong>polls.controller.ts:</strong> Reponsible for handling HTTP requests, validation and main service method invocations. <br/>

### mobile

Built with Expo React-Native. Fetches and displays a poll, when a poll option is selected updates the server with an HTTP request and displays the updated data while highlighting the latest selected option. Multiple votes can be given within the same session.

<strong>Components directory:</strong> Shared components accross the application are stored here.<br/>
<strong>Screens directory:</strong> Individual app screens.<br/>

### web
Built with Next.js. The structure and flow is mostly the same as the mobile app. But this one comes in black (: