# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiTest.spec.ts >> Get One Object
- Location: tests\ApiTest.spec.ts:74:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'id')
```

# Test source

```ts
  1   | import {test, expect, APIRequestContext, APIResponse} from '@playwright/test';
  2   | 
  3   | import ApiUtils from '../utils/ApiUtils';
  4   | 
  5   | const url: string = 'https://api.restful-api.dev/objects';
  6   | const baseUrl: string ="https://api.restful-api.dev/collections";
  7   | const productCollection:  string = "/products/objects"
  8   | let apiContext: APIRequestContext;
  9   | let apiResponse: APIResponse;
  10  | let response: any;
  11  | let jsonresponse: any;
  12  | let apiUtils: ApiUtils;
  13  | 
  14  | const postpayload = {
  15  |   "name": "Apple MacBook Pro 16",
  16  |   "data": {
  17  |     "year": 2019,
  18  |     "price": 1849.99,
  19  |     "CPU model": "Intel Core i9",
  20  |     "Hard disk size": "1 TB"
  21  |   },
  22  |   "Headers": {
  23  | 
  24  |     "content-type": "application/json",
  25  |     "x-api-key": "c281ea60-789e-416d-97ad-45c85d390874"
  26  | 
  27  |   }
  28  | 
  29  | };
  30  | 
  31  | const putpayload = {
  32  |   "name": "Apple MacBook Pro 18",
  33  |   "data": {
  34  |     "year": 2022,
  35  |     "price": 1899.99,
  36  |     "CPU model": "Intel Core i9",
  37  |     "Hard disk size": "2 TB"
  38  |   }
  39  | };
  40  | 
  41  | test.beforeEach("Before each test case", async ({playwright}) => {
  42  | 
  43  |   apiContext = await playwright.request.newContext();
  44  |   apiUtils = new ApiUtils(apiContext);
  45  | 
  46  | } );
  47  | 
  48  | 
  49  | test("Create Object", async ({playwright}) => {
  50  | 
  51  |     apiContext = await playwright.request.newContext();
  52  |     apiUtils = new ApiUtils(apiContext);
  53  |     apiResponse = await apiUtils.createObject(url, postpayload);
  54  | 
  55  |     console.log(apiResponse.status());
  56  |     expect.soft(apiResponse.statusText()).toBe('OK');
  57  | 
  58  |     response = await apiResponse.json();
  59  |     jsonresponse = await apiResponse.json();
  60  | 
  61  |     console.log(response);
  62  |     console.log(response.name);
  63  |     console.log(postpayload.name);
  64  |     expect.soft(response.name).toBe(postpayload.name);
  65  | 
  66  |     expect.soft(response.data.year).toBe(postpayload.data.year);
  67  |     expect.soft(response.data.price).toBe(postpayload.data.price);
  68  |     // expect.soft(response.data["CPU model"]);
  69  |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  70  | 
  71  | 
  72  | });
  73  | 
  74  | test("Get One Object", async ({playwright}) => {
  75  | 
  76  |     apiContext = await playwright.request.newContext();
> 77  |     apiResponse = await apiUtils.geSingleObject(url, response.id);
      |                                                               ^ TypeError: Cannot read properties of undefined (reading 'id')
  78  |     // response = apiResponse.json();
  79  | 
  80  |     expect.soft(apiResponse.status()).toBe(200);
  81  |     expect.soft(apiResponse.statusText()).toBe('OK');
  82  | 
  83  |     response = apiResponse.json();
  84  |     console.log(response);
  85  | 
  86  | 
  87  | 
  88  | });
  89  | 
  90  | test("Update the Object", async ({playwright}) => {
  91  | 
  92  |     apiContext = await playwright.request.newContext();
  93  |     // apiUtils = new ApiUtils(apiContext);
  94  |     apiResponse = await apiUtils.updateObject(url, jsonresponse.id, putpayload);
  95  | 
  96  |     console.log(apiResponse.status());
  97  |     expect.soft(apiResponse.statusText()).toBe('OK');
  98  | 
  99  |     response = await apiResponse.json();
  100 | 
  101 |     console.log(response);
  102 |     console.log(response.name);
  103 |     console.log(putpayload.name);
  104 |     expect.soft(response.name).toBe(putpayload.name);
  105 | 
  106 |     expect.soft(response.data.year).toBe(putpayload.data.year);
  107 |     expect.soft(response.data.price).toBe(putpayload.data.price);
  108 |     // expect.soft(response.data["CPU model"]);
  109 |     expect.soft(response.data["CPU model"]).toBe(putpayload.data["CPU model"]);
  110 | 
  111 | 
  112 | });
  113 | 
  114 | test("Delete Object", async ({playwright}) => {
  115 | 
  116 |     apiContext = await playwright.request.newContext();
  117 |     apiResponse = await apiUtils.deleteObject(url, response.id);
  118 | 
  119 | 
  120 | });
  121 | 
  122 | test("post api with key", async ({playwright}) => {
  123 |   apiResponse = await apiUtils.creteObjectUsingKey(url, postpayload);
  124 | 
  125 |   expect.soft(apiResponse.status()).toBe(200);
  126 |   expect.soft(apiResponse.statusText()).toBe('OK');
  127 | 
  128 |   response = apiResponse.json();
  129 |   console.log(response);
  130 | });
  131 | 
  132 | test.afterEach("Tear down", async () => {
  133 | 
  134 |     // apiUtils = null;
  135 | 
  136 | 
  137 | });
  138 | 
  139 | 
  140 | 
```