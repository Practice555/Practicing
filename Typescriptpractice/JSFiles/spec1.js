"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
const pageobjects_1 = require("./pageobjects");
describe('getting title', () => {
    let obj = new pageobjects_1.pgobjects();
    it('getting text', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        console.log(protractor_1.browser.params.Title);
        yield protractor_1.browser.get(obj.url);
        protractor_1.browser.getTitle().then(function (pagetitle) {
            console.log(pagetitle);
        });
        let title = yield obj.Text.getText(); //.then(function(title)
        yield expect(title).toBe("Practice Page");
        console.log(title);
        console.log("Successfully got the title and main page text");
        yield protractor_1.element(protractor_1.by.css('input[value="radio1"]')).click();
        protractor_1.browser.sleep(5000);
        yield expect(obj.Text.getCssValue('color')).toBe('rgba(33, 37, 41, 1)');
        //await expect(obj.Text.getCssValue('background-color')).toBe('rgba(33, 37, 41, 1)')
        console.log("Success fully matched the color");
    }));
    it('Auto suggetions', () => __awaiter(void 0, void 0, void 0, function* () {
        //await element(by.id("autocomplete")).click();
        yield obj.ASuggetions.sendKeys("india");
        yield protractor_1.browser.sleep(3000);
        //let itemcnt = await element.all(by.css('.ui-menu-item-wrapper')).count();
        //console.log("The auto suggetion drop down is showing the "+itemcnt+" options");
        //await element.all(by.css('.ui-menu-item-wrapper li')).each(function(items){
        //})
        yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ARROW_DOWN).perform();
        yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ARROW_DOWN).perform();
        //await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(5000);
    }));
    it('handling dropdown', () => __awaiter(void 0, void 0, void 0, function* () {
        yield obj.dropdown.click();
        //await element(by.css("#dropdown-class-example [value = 'option1']")).click();
    }));
    it('checkbox', () => __awaiter(void 0, void 0, void 0, function* () {
        yield obj.checkbox.click();
    }));
    it('handling window', () => __awaiter(void 0, void 0, void 0, function* () {
        yield obj.cliwin.click();
        let win = yield protractor_1.browser.getAllWindowHandles();
        yield protractor_1.browser.switchTo().window(win[1]);
        let title = yield protractor_1.browser.getTitle();
        console.log(title);
        yield protractor_1.browser.close();
        console.log("browser closed successfully");
        yield protractor_1.browser.switchTo().window(win[0]);
        yield obj.tab.click();
        let win2 = yield protractor_1.browser.getAllWindowHandles();
        yield protractor_1.browser.switchTo().window(win2[1]);
        let title2 = yield protractor_1.browser.getTitle();
        console.log(title2);
        yield protractor_1.browser.switchTo().window(win2[0]);
        console.log(yield protractor_1.browser.getTitle());
    }));
    it('working with alerts', () => __awaiter(void 0, void 0, void 0, function* () {
        yield obj.alrt.click();
        let alert = yield protractor_1.browser.switchTo().alert();
        yield expect(alert.getText()).toBe("Hello , share this practice page and share your knowledge");
        yield alert.accept();
        console.log("first alert accepted");
        yield obj.confmbtn.click();
        let Calert = yield protractor_1.browser.switchTo().alert();
        yield expect(Calert.getText()).toBe("Hello , Are you sure you want to confirm?");
        yield Calert.accept();
        console.log("Confirm alert accepted");
        yield obj.confmbtn.click();
        yield (protractor_1.browser.switchTo().alert()).dismiss();
        console.log("confirm alert dismissed");
    }));
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
    it("hide and show textbox", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(obj.hideshoe.isDisplayed()).toBe(true);
        console.log("The hide show textbox is displaying before click on hide");
        yield protractor_1.element(protractor_1.by.id('hide-textbox')).click();
        yield expect(obj.hideshoe.isDisplayed()).toBe(false);
        console.log("After click on hide, the text box was hide");
        yield protractor_1.element(protractor_1.by.id('show-textbox')).click();
        yield expect(obj.hideshoe.isDisplayed()).toBe(true);
        console.log("After click on show, the text box is showing");
    }));
    it('handling frmes', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().frame(0);
        console.log("successfully switched to frame");
        let text = yield obj.handfr.getText();
        console.log(text);
    }));
    //it('handling images',async()=>{
    //let logoimage = element(by.css("img[src='images/rs_logo.png']"));
    //await expect(logoimage.isDisplayed()).toBe(true);
    //console.log("Logo image available in page");
    //})
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUU5QyxnREFBbUQ7QUFDbkQsK0NBQXdDO0FBSXhDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRSxFQUFFO0lBRTFCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVMsRUFBRSxDQUFBO0lBRXpCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBTyxFQUFFO1FBQ3hCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFNBQVM7WUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUUxQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFBLHVCQUF1QjtRQUV2RCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUE7UUFDNUQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxD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