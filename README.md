# What Is bloxystores.js?

A JavaScript/TypeScript API wrapper for the roblox datastores web API.

# How Do I Install it?

Run "npm install bloxystores.js"

# Usage

## Connecting with your keys

```ts
import { connect } from "bloxystores.js";

connect({
  apiKey: API_KEY, // The api key from the roblox dashboard
  universeId: UNIVERSE_ID, // The universe of the game to use
});
```

## Creating a new entry

```ts
import { dataStore } from "bloxystores.js";

const playerData = dataStore("playerData");

playerData
  .createOne(7, {
    // Create an entry with the id "7"
    cash: 101, // Set the value as { cash: 101 }
  })
  .then(console.log); // Log out the result
```
