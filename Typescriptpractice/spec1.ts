import {browser,element,by} from "protractor";
import jasmine from 'jasmine';
import { protractor } from "protractor/built/ptor";
import {pgobjects} from "./pageobjects";
import { DriverProvider } from "protractor/built/driverProviders";


describe('getting title', ()=> {

    let obj = new pgobjects()

    it('getting text', async()=> {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        console.log(browser.params.Title)
        await browser.get(obj.url);
        browser.getTitle().then(function(pagetitle){

            console.log(pagetitle)
            
        })
        let title = await obj.Text.getText()//.then(function(title)

            await expect(title).toBe("Practice Page")
            console.log(title)
            console.log("Successfully got the title and main page text")
            await element(by.css('input[value="radio1"]')).click()
            browser.sleep(5000)
            await expect(obj.Text.getCssValue('color')).toBe('rgba(33, 37, 41, 1)')
            //await expect(obj.Text.getCssValue('background-color')).toBe('rgba(33, 37, 41, 1)')
            console.log("Success fully matched the color")


        
        
        

    })

    it('Auto suggetions',async()=> {
        //await element(by.id("autocomplete")).click();
        await obj.ASuggetions.sendKeys("india")
        await   browser.sleep(3000)
        //let itemcnt = await element.all(by.css('.ui-menu-item-wrapper')).count();
        //console.log("The auto suggetion drop down is showing the "+itemcnt+" options");
        //await element.all(by.css('.ui-menu-item-wrapper li')).each(function(items){
            

        //})

        


        await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        //await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        await browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(5000)


    })

    it('handling dropdown',async()=> {
        await obj.dropdown.click()
        //await element(by.css("#dropdown-class-example [value = 'option1']")).click();

    })

    it('checkbox',async()=> {
        await obj.checkbox.click();


    })
    it('handling window',async()=>{
        await obj.cliwin.click();
        let win = await browser.getAllWindowHandles()
        await browser.switchTo().window(win[1]);
        let title = await browser.getTitle();
        console.log(title);
        await browser.close();
        console.log("browser closed successfully")
        await browser.switchTo().window(win[0])
        await obj.tab.click();
        let win2 = await browser.getAllWindowHandles()
        await browser.switchTo().window(win2[1])
        let title2 = await browser.getTitle()
        console.log(title2)
        await browser.switchTo().window(win2[0])
        console.log(await browser.getTitle())


    })
    it('working with alerts',async()=>{
        await obj.alrt.click();
        let alert = await browser.switchTo().alert();
        await expect(alert.getText()).toBe("Hello , share this practice page and share your knowledge");
        await alert.accept();
        console.log("first alert accepted");
        await obj.confmbtn.click();
        let Calert = await browser.switchTo().alert();
        await expect(Calert.getText()).toBe("Hello , Are you sure you want to confirm?");
        await Calert.accept();
        console.log("Confirm alert accepted");
        await obj.confmbtn.click();
        await (browser.switchTo().alert()).dismiss();
        console.log("confirm alert dismissed");


    })

    /*it('handling web tables',async()=>{
        let rowcnt = await obj.rows.count();
        console.log("total rows count"+rowcnt);
        let colcnt = await obj.rows.get(1).all(by.tagName('td')).count();
        console.log("total col count"+colcnt);
        let getrowtxt = await obj.rows.get(1).all(by.tagName('td:nth-child(1)')).getText();
        console.log("the cell text is"+getrowtxt)

    
        
    })*/
    /*it('handling tables',async()=>{
        let RowCnt = element.all(by.id("product")).get(0).all(by.tagName('tr')).get(0)
        let hrds = RowCnt.all(by.tagName('th'))
        console.log("headers taken")
        if ((await hrds).length>0)
        {
        console.log("The headers count is"+((await hrds).length))
        for(let i =0;i<((await hrds).length);i++)
        {
        console.log(i)
        let h = await RowCnt.all(by.tagName('th'))
        let name = h[i].getText()
        console.log(name)
        if (await name == "Price")
        {
        let rows = element.all(by.id("product")).get(0).all(by.tagName('tr')).get(1)
        let cell = await rows.all(by.tagName('td:nth-child(i)')).getText()
        expect(cell).toBe("30")
        console.log("passed")
        }
                
                    
        }
        console.log("Failed")
        }
    })*/

    it("hide and show textbox",async()=>{
        await expect(obj.hideshoe.isDisplayed()).toBe(true);
        console.log("The hide show textbox is displaying before click on hide");
        await element(by.id('hide-textbox')).click();
        await expect(obj.hideshoe.isDisplayed()).toBe(false);
        console.log("After click on hide, the text box was hide")
        await element(by.id('show-textbox')).click();
        await expect(obj.hideshoe.isDisplayed()).toBe(true);
        console.log("After click on show, the text box is showing");

    })

    it('handling frmes',async()=>{
        await browser.switchTo().frame(0);
        console.log("successfully switched to frame");
        let text:string = await obj.handfr.getText()
        console.log(text)

    })

    //it('handling images',async()=>{
        //let logoimage = element(by.css("img[src='images/rs_logo.png']"));
        //await expect(logoimage.isDisplayed()).toBe(true);
        //console.log("Logo image available in page");



    //})
    
})