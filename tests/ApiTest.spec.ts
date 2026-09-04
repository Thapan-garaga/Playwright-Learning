import {test, expect, APIRequestContext, APIResponse} from '@playwright/test';

import ApiUtils from '../utils/ApiUtils';

const url: string = 'https://api.restful-api.dev/objects';
const baseUrl: string = 'https://api.restful-api.dev/collections/';
const productCollection:  string = 'mobiles/objects/';
let apiContext: APIRequestContext;
let apiResponse: APIResponse;
let response: any;
let jsonresponse: any;
let apiUtils: ApiUtils;

const postpayload = {
  "name": "Apple iphone Pro 56",
  "data": {
    "year": 2020,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
};

const putpayload = {
  "name": "Apple MacBook Pro 27",
  "data": {
    "year": 2022,
    "price": 1899.99,
    "CPU model": "Intel Core i9",
    
  }
};

// test.beforeEach("Before each test case", async ({playwright}) => {

//   apiContext = await playwright.request.newContext();
//   apiUtils = new ApiUtils(apiContext);

// } );


// test("Create Object", async ({playwright}) => {

//     apiContext = await playwright.request.newContext();
//     apiUtils = new ApiUtils(apiContext);
//     apiResponse = await apiUtils.createObject(url, postpayload);

//     console.log(apiResponse.status());
//     expect.soft(apiResponse.statusText()).toBe('OK');

//     response = await apiResponse.json();
//     jsonresponse = await apiResponse.json();

//     console.log(response);
//     console.log(response.name);
//     console.log(postpayload.name);
//     expect.soft(response.name).toBe(postpayload.name);

//     expect.soft(response.data.year).toBe(postpayload.data.year);
//     expect.soft(response.data.price).toBe(postpayload.data.price);
//     // expect.soft(response.data["CPU model"]);
//     expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);


// });

// test("Get One Object", async ({playwright}) => {

//     apiContext = await playwright.request.newContext();
//     apiResponse = await apiUtils.geSingleObject(url, response.id);
//     // response = apiResponse.json();

//     expect.soft(apiResponse.status()).toBe(200);
//     expect.soft(apiResponse.statusText()).toBe('OK');

//     response = apiResponse.json();
//     console.log(response);



// });

// test("Update the Object", async ({playwright}) => {

//     apiContext = await playwright.request.newContext();
//     // apiUtils = new ApiUtils(apiContext);
//     apiResponse = await apiUtils.updateObject(url, jsonresponse.id, putpayload);

//     console.log(apiResponse.status());
//     expect.soft(apiResponse.statusText()).toBe('OK');

//     response = await apiResponse.json();

//     console.log(response);
//     console.log(response.name);
//     console.log(putpayload.name);
//     expect.soft(response.name).toBe(putpayload.name);

//     expect.soft(response.data.year).toBe(putpayload.data.year);
//     expect.soft(response.data.price).toBe(putpayload.data.price);
//     // expect.soft(response.data["CPU model"]);
//     expect.soft(response.data["CPU model"]).toBe(putpayload.data["CPU model"]);


// });

// test("Delete Object", async ({playwright}) => {

//     apiContext = await playwright.request.newContext();
//     apiResponse = await apiUtils.deleteObject(url, response.id);


// });

test("post api with key", async ({playwright}) => {
   
  apiContext = await playwright.request.newContext();
  apiUtils = new ApiUtils(apiContext);
  
  apiResponse = await apiUtils.creteObjectUsingKey(`${baseUrl}${productCollection}`, postpayload);

  expect.soft(await apiResponse.status()).toBe(200);
  expect.soft(await apiResponse.statusText()).toBe('OK');
  response = await apiResponse.json();
  console.log(response);
});

test("get request with key", async ({playwright}) =>{
  apiContext = await playwright.request.newContext();
  apiResponse = await apiUtils.getObjectsusingApiKey(`${baseUrl}${productCollection}${response.id}`);
  console.log(await apiResponse.json());
});

test("Update data with key", async ({playwright}) => {
  apiContext = await playwright.request.newContext();

  apiResponse = await apiUtils.putRequestwithApiKey(`${baseUrl}${productCollection}${response.id}`, putpayload);
  response = await apiResponse.json();
  console.log(response);

});
test("delete object using key", async ({playwright}) => {
  apiContext = await playwright.request.newContext();
  apiResponse = await apiUtils.deleteObjectwithKey(`${baseUrl}${productCollection}${response.id}`);
  console.log(await apiResponse.json());
  

});

// test.afterEach("Tear down", async () => {

//     // apiUtils = null;


// });


