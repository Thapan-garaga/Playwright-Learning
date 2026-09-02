# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiTest.spec.ts >> Update the Object
- Location: tests\ApiTest.spec.ts:72:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "OK"
Received: "Not Found"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Apple MacBook Pro 18"
Received: undefined
```

```
TypeError: Cannot read properties of undefined (reading 'year')
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
  21 | const putpayload = {
  22 |   "name": "Apple MacBook Pro 18",
  23 |   "data": {
  24 |     "year": 2022,
  25 |     "price": 1899.99,
  26 |     "CPU model": "Intel Core i9",
  27 |     "Hard disk size": "2 TB"
  28 |   }
  29 | };
  30 | 
  31 | 
  32 | test("Create Object", async ({playwright}) => {
  33 | 
  34 |     apiContext = await playwright.request.newContext();
  35 |     apiUtils = new ApiUtils(apiContext);
  36 |     apiResponse = await apiUtils.createObject(url, postpayload);
  37 | 
  38 |     console.log(apiResponse.status());
  39 |     expect.soft(apiResponse.statusText()).toBe('OK');
  40 | 
  41 |     response = await apiResponse.json();
  42 | 
  43 |     console.log(response);
  44 |     console.log(response.name);
  45 |     console.log(postpayload.name);
  46 |     expect.soft(response.name).toBe(postpayload.name);
  47 | 
  48 |     expect.soft(response.data.year).toBe(postpayload.data.year);
  49 |     expect.soft(response.data.price).toBe(postpayload.data.price);
  50 |     // expect.soft(response.data["CPU model"]);
  51 |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  52 | 
  53 | 
  54 | });
  55 | 
  56 | test("Get One Object", async ({playwright}) => {
  57 | 
  58 |     apiContext = await playwright.request.newContext();
  59 |     apiResponse = await apiUtils.geSingleObject(url, response.id);
  60 |     // response = apiResponse.json();
  61 | 
  62 |     expect.soft(apiResponse.status()).toBe(200);
  63 |     expect.soft(apiResponse.statusText()).toBe('OK');
  64 | 
  65 |     response = apiResponse.json();
  66 |     console.log(response);
  67 | 
  68 | 
  69 | 
  70 | });
  71 | 
  72 | test("Update the Object", async ({playwright}) => {
  73 | 
  74 |     apiContext = await playwright.request.newContext();
  75 |     // apiUtils = new ApiUtils(apiContext);
  76 |     apiResponse = await apiUtils.updateObject(url, response.id, putpayload);
  77 | 
  78 |     console.log(apiResponse.status());
  79 |     expect.soft(apiResponse.statusText()).toBe('OK');
  80 | 
  81 |     response = await apiResponse.json();
  82 | 
  83 |     console.log(response);
  84 |     console.log(response.name);
  85 |     console.log(putpayload.name);
  86 |     expect.soft(response.name).toBe(putpayload.name);
  87 | 
> 88 |     expect.soft(response.data.year).toBe(putpayload.data.year);
     |                               ^ TypeError: Cannot read properties of undefined (reading 'year')
  89 |     expect.soft(response.data.price).toBe(putpayload.data.price);
  90 |     // expect.soft(response.data["CPU model"]);
  91 |     expect.soft(response.data["CPU model"]).toBe(putpayload.data["CPU model"]);
  92 | 
  93 | 
  94 | });
  95 | 
```