import {test, expect, type Locator} from '@playwright/test';

test.skip("Single Frame Test", async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/iframe");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('iframe#mce_0_ifr');
    const textArea: Locator = frame.locator('body#tinymce p');
    console.log("Text area text is:", await textArea.innerText());


});

test("Nested Frames Test", async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frame({url: 'https://the-internet.herokuapp.com/frame_top'});

    const frames = frame?.childFrames();
    console.log("Total number of frames are:", frames?.length);

    const leftframe = await frames?.at(0)?.getByText('LEFT').innerText();
    console.log("Left frame text is:", leftframe);

    const middleframe = await frames?.at(1)?.getByText('MIDDLE').innerText();
    console.log("Middle frame text is:", middleframe);

    const rightframe = await frames?.at(2)?.getByText('RIGHT').innerText();
    console.log("Right frame text is:", rightframe);
    


});
