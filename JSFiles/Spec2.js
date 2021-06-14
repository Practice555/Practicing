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
describe('Protractor Demo App', function () {
    it('should add one and two', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://genesys-dev.factset.io/analyst/defaultgetnext/1095');
        yield protractor_1.browser.sleep(10000);
        //element(by.)
        //let cnt = element(by.className('tg-grid')).element(by.cssContainingText('.tf-grid-template-content','Estimates First Call VIMS'))
        //let ele = cnt.element(by.className('highPriority'));//cssContainingText('.tf-grid-viewport-client','High'));
        //console.log("the text is"+cnt.getText())
        //await expect(cnt.getCssValue('color')).toBe('#4b4b4b')
        //console.log("success")
        //let cell:ElementFinder = element(by.className('tg-grid')).element(by.className('mediumPriority'))
        //console.log("the text is"+await cell.getText())
        //console.log("the text is"+await cell.count())
        //await expect(cell.getCssValue('color')).toBe('rgba(255, 0, 0, 1)')
        //console.log("success")
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlYzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9TcGVjMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RDtBQUk3RCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQU8sRUFBRTtRQUNwQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNERBQTRELENBQUMsQ0FBQztRQUNoRixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFCLGNBQWM7UUFDZCxtSUFBbUk7UUFDbkksOEdBQThHO1FBQzlHLDBDQUEwQztRQUMxQyx3REFBd0Q7UUFDeEQsd0JBQXdCO1FBQ3hCLG1HQUFtRztRQUNuRyxpREFBaUQ7UUFDakQsK0NBQStDO1FBQy9DLG9FQUFvRTtRQUNwRSx3QkFBd0I7SUFHMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=