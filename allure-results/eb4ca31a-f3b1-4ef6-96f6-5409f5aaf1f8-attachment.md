# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1ApiPost.spec.ts >> Get Request
- Location: tests\1ApiPost.spec.ts:55:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "ok"
Received: "OK"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Apple MacBook Pro 16"
Received: "json"
```

# Test source

```ts
  1  | import { expect, request, test } from '@playwright/test';
  2  | 
  3  | const url = 'https://api.restful-api.dev/objects';
  4  | let id: string;
  5  | let response: any;
  6  | 
  7  | let payload: any = {
  8  |   "name": "Apple MacBook Pro 16",
  9  |   "data": {
  10 |     "year": 2019,
  11 |     "price": 1849.99,
  12 |     "CPU model": "Intel Core i9",
  13 |     "Hard disk size": "1 TB"
  14 |   }
  15 | };
  16 | 
  17 | test("Post Request", async ({request}) => {
  18 | 
  19 |     const postResponse = await request.post(url, 
  20 |         {
  21 |             data: {
  22 |                 "name": "Apple MacBook Pro 16",
  23 |                 "data": {
  24 |                     "year": 2019,
  25 |                     "price": 1849.99,
  26 |                     "CPU model": "Intel Core i9",
  27 |                     "Hard disk size": "1 TB"
  28 |                 }
  29 |                 
  30 |                 
  31 |             },
  32 |             headers: {
  33 |                 "Content-Type": "application/json"
  34 |             }
  35 |         }
  36 |     
  37 |     );
  38 | 
  39 |     console.log(`The status is: ${postResponse.status()}`);
  40 |     console.log(postResponse.statusText());
  41 |     // console.log(postResponse);
  42 |     const jsonResponse = await postResponse.json();
  43 |     console.log(jsonResponse);
  44 |     console.log(jsonResponse.id);
  45 |     console.log(jsonResponse.name);
  46 |     console.log(jsonResponse.data.price);
  47 |     console.log(jsonResponse.data["CPU model"]);
  48 |     console.log(jsonResponse.data["Hard disk size"]);
  49 | 
  50 |     id = jsonResponse.id;
  51 | 
  52 | 
  53 | });
  54 | 
  55 | test("Get Request", async ({request}) => {
  56 | 
  57 |     let getResponse: any = await request.get(`${url}/${id}`);
  58 |     console.log(getResponse.status());
  59 |     expect.soft(getResponse.status()).toBe(200);
  60 |     expect.soft(getResponse.statusText()).toBe('ok');
  61 |     response= getResponse.json;
> 62 |     expect.soft(response.name).toBe(payload.name);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  63 | 
  64 |     // expect.soft(response.data.year).toBe(payload.data.year);
  65 |     // expect.soft(response.data.year).toBe(payload.data.price);
  66 |     // // expect.soft(response.data["CPU model"]);
  67 |     // expect.soft(response.data["CPU model"]).toBe(payload.data["CPU model"]);
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | });
```