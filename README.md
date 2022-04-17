# consecutive-days

A Node.js module that returns the consecutive days or times

## Installation
```sh
npm install consecutive-days
yarn add consecutive-days
bower install consecutive-days --save
```

## Usage

### Javascript
```javascript
const consecutiveDays = require('consecutive-days');
const days = consecutiveDays.days(new Date(), 10, true);
```
```sh
Output should be an array of 10 consecutive days
```

### typescript
```typescript
import consecutiveDays from 'consecutive-days';
const days = consecutiveDays.days(new Date(), 10, true);
```
```sh
Output should be an array of 10 consecutive days
```

## test
```sh
npm run test
```