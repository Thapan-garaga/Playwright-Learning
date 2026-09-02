import { test, expect } from "@playwright/test";


test("test 1", async () => {

    console.log('I am test1');

});

test("test 2", async () => {

    console.log('I am test2');

});

test("test 3", async () => {

    console.log('I am test3');

});

test("test 4", async () => {

    console.log('I am test4');

});

test.beforeAll("Before All", async () => {

    console.log('I am Before All');

});

test.afterAll("After All", async () => {

    console.log('I am After All');

});

test.beforeEach("Before Each", async () => {

    console.log('I am Before Each');

});

test.afterEach("After Each", async () => {

    console.log('I am After Each');

});