# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1ApiPost.spec.ts >> Put Request
- Location: tests\1ApiPost.spec.ts:77:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2019
Received: 2026
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1849.99
Received: 1899.99
```

# Test source

```ts
  1   | import { expect, request, test } from '@playwright/test';
  2   | 
  3   | const url = 'https://api.restful-api.dev/objects';
  4   | let id: string;
  5   | let response: any;
  6   | 
  7   | const postpayload = {
  8   |   "name": "Apple MacBook Pro 16",
  9   |   "data": {
  10  |     "year": 2019,
  11  |     "price": 1849.99,
  12  |     "CPU model": "Intel Core i9",
  13  |     "Hard disk size": "1 TB"
  14  |   }
  15  | };
  16  | const putpayload = {
  17  |   "name": "Apple MacBook Pro 16",
  18  |   "data": {
  19  |     "year": 2026,
  20  |     "price": 1899.99,
  21  |     "CPU model": "Intel Core i9",
  22  |     "Hard disk size": "2 TB"
  23  |   }
  24  | };
  25  | const patchpayload = {
  26  |   "name": "Apple MacBook Pro 19"
  27  | }
  28  | 
  29  | test("Post Request", async ({request}) => {
  30  | 
  31  |     const postResponse = await request.post(url, 
  32  |         {
  33  |             data: postpayload,
  34  |             headers: {
  35  |                 "Content-Type": "application/json"
  36  |             }
  37  |         }
  38  |     
  39  |     );
  40  | 
  41  |     console.log(`The status is: ${postResponse.status()}`);
  42  |     console.log(postResponse.statusText());
  43  |     // console.log(postResponse);
  44  |     response = await postResponse.json();
  45  |     console.log(response);
  46  |     console.log(response.id);
  47  |     console.log(response.name);
  48  |     console.log(response.data.price);
  49  |     console.log(response.data["CPU model"]);
  50  |     console.log(response.data["Hard disk size"]);
  51  | 
  52  |     // id = response.id;
  53  | 
  54  | 
  55  | });
  56  | 
  57  | test("Get Request", async ({request}) => {
  58  | 
  59  |     const getResponse = await request.get(`${url}/${response.id}`);
  60  |     // console.log(getResponse.status());
  61  |     // expect.soft(getResponse.status()).toBe(200);
  62  |     // expect.soft(getResponse.statusText()).toBe('OK');
  63  |     response=await getResponse.json();
  64  |     console.log(response);
  65  |     console.log(response.name);
  66  |     console.log(postpayload.name);
  67  |     expect.soft(response.name).toBe(postpayload.name);
  68  | 
  69  |     expect.soft(response.data.year).toBe(postpayload.data.year);
  70  |     expect.soft(response.data.price).toBe(postpayload.data.price);
  71  |     // expect.soft(response.data["CPU model"]);
  72  |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  73  | 
  74  | 
  75  | });
  76  | 
  77  | test("Put Request", async ({request}) => {
  78  | 
  79  |     const putResponse = await request.post(url, 
  80  |         {
  81  |             data: putpayload,
  82  |             headers: {
  83  |                 "Content-Type": "application/json"
  84  |             }
  85  |         }
  86  |     
  87  |     );
  88  |     response=await putResponse.json();
  89  |     console.log(response);
  90  |     console.log(response.name);
  91  |     console.log(postpayload.name);
  92  |     expect.soft(response.name).toBe(postpayload.name);
  93  | 
  94  |     expect.soft(response.data.year).toBe(postpayload.data.year);
> 95  |     expect.soft(response.data.price).toBe(postpayload.data.price);
      |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  96  |     // expect.soft(response.data["CPU model"]);
  97  |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  98  | 
  99  | 
  100 | });
  101 | 
  102 | test("Patch Request", async ({request}) => {
  103 | 
  104 |     const patchResponse = await request.post(url, 
  105 |         {
  106 |             data: putpayload,
  107 |             headers: {
  108 |                 "Content-Type": "application/json"
  109 |             }
  110 |         }
  111 |     
  112 |     );
  113 |     response=await patchResponse.json();
  114 |     console.log(response);
  115 |     console.log(response.name);
  116 |     console.log(postpayload.name);
  117 |     expect.soft(response.name).toBe(postpayload.name);
  118 | 
  119 |     expect.soft(response.data.year).toBe(postpayload.data.year);
  120 |     expect.soft(response.data.price).toBe(postpayload.data.price);
  121 |     // expect.soft(response.data["CPU model"]);
  122 |     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);
  123 | 
  124 | 
  125 | });
```