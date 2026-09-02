import { test, expect } from "@playwright/test";

test("test 1", {tag:'@Sanity'}, async () => {

    console.log('I am test1');

});

test("test 2", {tag:['@Sanity', '@Smoke' ]}, async () => {

    console.log('I am test2');

});

test("test 3", {tag:'@Smoke'}, async () => {

    console.log('I am test3');

});

test("test 4", {tag: ['@QA', '@Stage']}, async () => {

    console.log('I am test4');

});

