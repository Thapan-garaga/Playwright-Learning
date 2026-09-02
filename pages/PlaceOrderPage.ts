import {type Page, expect} from '@playwright/test';
import PageObjects from '../pages/PageObjects';

export default class extends PageObjects {

// Page page: Page;

    constructor(page: Page ){

        super(page);
    }

    async selectProduct(ProdName: string){

        for(const product of await this.products.all())
        {

            const data = await product.locator('b').innerText();
            if(data == ProdName){

                await product.getByText(' Add To Cart').click();
                break;
            }

        }



    }
    async checkout()
    {
        await this.cart.click();
        await this.checkoutBtn.click();
    }
    async PlaceOrder(countryName: string)
    {
        await this.country.pressSequentially(countryName);
        await this.selectCountry.last().click();
        await this.pOrder.click();
    }
    async getOrderId()
    {
        await expect.soft(this.orderId).toBeVisible();
        let orderId = await this.orderId.innerText();
        orderId = orderId.replaceAll('|', '').trim();
        return orderId;
    }
    async viewOrder(orderId: string)
    {
        await this.myOrders.click();
        for(const row of await this.rows.all())
        {
            const orderIdFromTable = await row.locator('th').innerText();
            if(orderIdFromTable == orderId)
            {
                await row.getByText('View').click();
                break;
            }
        }
        await this.viewOrders.click();
    }

}

