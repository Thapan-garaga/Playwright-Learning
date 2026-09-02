# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 22purchase.spec.ts >> Login to client Application
- Location: tests\22purchase.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText(' View Orders ')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "6a980d3321054ba465066950 ZARA COAT 3 $ 11500 Wed Sep 02 View Delete" [ref=e38]:
          - rowheader "6a980d3321054ba465066950" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Wed Sep 02" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "6a8940e821054ba465e876d4 ADIDAS ORIGINAL $ 11500 Sat Aug 22 View Delete" [ref=e49]:
          - rowheader "6a8940e821054ba465e876d4" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ADIDAS ORIGINAL" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Sat Aug 22" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "6a89408021054ba465e875c4 ZARA COAT 3 $ 11500 Sat Aug 22 View Delete" [ref=e60]:
          - rowheader "6a89408021054ba465e875c4" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ZARA COAT 3" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Sat Aug 22" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "6a89403d21054ba465e8752c iphone 13 pro $ 55000 Sat Aug 22 View Delete" [ref=e71]:
          - rowheader "6a89403d21054ba465e8752c" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "iphone 13 pro" [ref=e75]
          - cell "$ 55000" [ref=e76]
          - cell "Sat Aug 22" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "6a88f0a921054ba465e8234b ADIDAS ORIGINAL $ 11500 Sat Aug 22 View Delete" [ref=e82]:
          - rowheader "6a88f0a921054ba465e8234b" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "ADIDAS ORIGINAL" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Sat Aug 22" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "6a88f09821054ba465e82312 ZARA COAT 3 $ 11500 Sat Aug 22 View Delete" [ref=e93]:
          - rowheader "6a88f09821054ba465e82312" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Sat Aug 22" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "6a88f08621054ba465e822eb iphone 13 pro $ 55000 Sat Aug 22 View Delete" [ref=e104]:
          - rowheader "6a88f08621054ba465e822eb" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "iphone 13 pro" [ref=e108]
          - cell "$ 55000" [ref=e109]
          - cell "Sat Aug 22" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | import {type Page, expect} from '@playwright/test';
  2  | import PageObjects from '../pages/PageObjects';
  3  | 
  4  | export default class extends PageObjects {
  5  | 
  6  | // Page page: Page;
  7  | 
  8  |     constructor(page: Page ){
  9  | 
  10 |         super(page);
  11 |     }
  12 | 
  13 |     async selectProduct(ProdName: string){
  14 | 
  15 |         for(const product of await this.products.all())
  16 |         {
  17 | 
  18 |             const data = await product.locator('b').innerText();
  19 |             if(data == ProdName){
  20 | 
  21 |                 await product.getByText(' Add To Cart').click();
  22 |                 break;
  23 |             }
  24 | 
  25 |         }
  26 | 
  27 | 
  28 | 
  29 |     }
  30 |     async checkout()
  31 |     {
  32 |         await this.cart.click();
  33 |         await this.checkoutBtn.click();
  34 |     }
  35 |     async PlaceOrder(countryName: string)
  36 |     {
  37 |         await this.country.pressSequentially(countryName);
  38 |         await this.selectCountry.last().click();
  39 |         await this.pOrder.click();
  40 |     }
  41 |     async getOrderId()
  42 |     {
  43 |         await expect.soft(this.orderId).toBeVisible();
  44 |         let orderId = await this.orderId.innerText();
  45 |         orderId = orderId.replaceAll('|', '').trim();
  46 |         return orderId;
  47 |     }
  48 |     async viewOrder(orderId: string)
> 49 |     {
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  50 |         await this.myOrders.click();
  51 |         for(const row of await this.rows.all())
  52 |         {
  53 |             const orderIdFromTable = await row.locator('th').innerText();
  54 |             if(orderIdFromTable == orderId)
  55 |             {
  56 |                 await row.getByText('View').click();
  57 |                 break;
  58 |             }
  59 |         }
  60 |         await this.viewOrders.click();
  61 |     }
  62 | 
  63 | }
  64 | 
  65 | 
```