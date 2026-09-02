import { expect, request, test } from '@playwright/test';

const url = 'https://api.restful-api.dev/objects';
let id: string;
let response: any;
let apiresponse: any;

const postpayload = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
};
const putpayload = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2026,
    "price": 1899.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "2 TB"
  }
};
const patchpayload = {
  "name": "Apple MacBook Pro 19"
}

test("Post Request", async ({request}) => {

    apiresponse = await request.post(url, 
        {
            data: postpayload,
            headers: {
                "Content-Type": "application/json"
            }
        }
    
    );

    console.log(`The status is: ${apiresponse.status()}`);
    console.log(apiresponse.statusText());
    // console.log(postResponse);
    response = await apiresponse.json();
    console.log(response);
    console.log(response.id);
    console.log(response.name);
    console.log(response.data.price);
    console.log(response.data["CPU model"]);
    console.log(response.data["Hard disk size"]);

    // id = response.id;


});

test("Get Request", async ({request}) => {

    apiresponse = await request.get(`${url}/${response.id}`);
    // console.log(getResponse.status());
    // expect.soft(getResponse.status()).toBe(200);
    // expect.soft(getResponse.statusText()).toBe('OK');
    response=await apiresponse.json();
    console.log(response);
    console.log(response.name);
    console.log(postpayload.name);
    expect.soft(response.name).toBe(postpayload.name);

    expect.soft(response.data.year).toBe(postpayload.data.year);
    expect.soft(response.data.price).toBe(postpayload.data.price);
    // expect.soft(response.data["CPU model"]);
    expect.soft(response.data["CPU model"]).toBe(postpayload.data["CPU model"]);


});

test("Put Request", async ({request}) => {

    apiresponse = await request.post(url, 
        {
            data: putpayload,
            headers: {
                "Content-Type": "application/json"
            }
        }
    
    );
    response=await apiresponse.json();
    console.log(response);
    console.log(response.name);
    console.log(putpayload.name);
    expect.soft(response.name).toBe(putpayload.name);

    expect.soft(response.data.year).toBe(putpayload.data.year);
    expect.soft(response.data.price).toBe(putpayload.data.price);
    // expect.soft(response.data["CPU model"]);
    expect.soft(response.data["CPU model"]).toBe(putpayload.data["CPU model"]);


});

test("Patch Request", async ({request}) => {

    apiresponse = await request.post(url, 
        {
            data: patchpayload,
            headers: {
                "Content-Type": "application/json"
            }
        }
    
    );
    response=await apiresponse.json();
    console.log(response);
    console.log(response.name);
    console.log(patchpayload.name);
    expect.soft(response.name).toBe(patchpayload.name);

    // expect.soft(response.data.year).toBe(patchpayload.data.year);
    // expect.soft(response.data.price).toBe(patchpayload.data.price);
    // // expect.soft(response.data["CPU model"]);
    // expect.soft(response.data["CPU model"]).toBe(patchpayload.data["CPU model"]);


});