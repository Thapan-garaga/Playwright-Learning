# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiTest.spec.ts >> Get One Object
- Location: tests\ApiTest.spec.ts:46:5

# Error details

```
TypeError: response.status is not a function
```

# Test source

```ts
  1  | import {test, expect, APIRequestContext, APIResponse} from '@playwright/test';
  2  | 
  3  | import ApiUtils from '../utils/ApiUtils';
  4  | 
  5  | const url: string = 'https://api.restful-api.dev/objects';
  6  | let apiContext: APIRequestContext;
  7  | let apiResponse: APIResponse;
  8  | let response: any;
  9  | let apiUtils: ApiUtils;
  10 | 
  11 | const postpayload = {
  12 |   "name": "Apple MacBook Pro 16",
  13 |   "data": {
  14 |     "year": 2019,
  15 |     "price": 1849.99,
  16 |     "CPU model": "Intel Core i9",
  17 |     "Hard disk size": "1 TB"
  18 |   }
  19 | };
  20 | 
  21 | 
  22 | test("Create Object", async ({playwright}) => {
  23 | 
  24 |     apiContext = await playwright.request.newContext();
  25 |     apiUtils = new ApiUtils(apiContext);
  26 |     apiResponse = await apiUtils.createObject(url, postpayload);
  27 | 
  28 |     console.log(apiResponse.status());
  29 |     expect.soft(apiResponse.statusText()).toBe('OK');
  30 | 
  31 |     response = await apiResponse.json();
  32 | 
  33 |     console.log(response);
  34 |     console.log(response.name);
  35 |     console.log(postpayload.name);
  36 |     expect.soft(response.name).toBe(postpayload.name);
  37 | 
  38 |     expect.soft(response.data.year).toBe(postpayload.data.year);
  39 |     expect.soft(response.data.price).toBe(postpayload.data.price);
  40 |     // expect.soft(response.data["CPU model"]);
  41 |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  42 | 
  43 | 
  44 | });
  45 | 
  46 | test("Get One Object", async ({playwright}) => {
  47 | 
  48 |     apiContext = await playwright.request.newContext();
  49 |     apiResponse = await apiUtils.geSingleObject(url, response.id);
  50 |     response = apiResponse.json();
  51 | 
> 52 |     expect.soft(response.status()).toBe(200);
     |                          ^ TypeError: response.status is not a function
  53 |     expect.soft(response.statusText()).toBe('OK');
  54 | 
  55 | 
  56 | 
  57 | });
```