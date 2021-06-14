"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgobjects = void 0;
const protractor_1 = require("protractor");
class pgobjects {
    //cols:ElementArrayFinder
    constructor() {
        this.Text = protractor_1.element(protractor_1.by.tagName("h1"));
        this.url = "https://www.rahulshettyacademy.com/AutomationPractice/";
        this.ASuggetions = protractor_1.element(protractor_1.by.id("autocomplete"));
        this.dropdown = protractor_1.element(protractor_1.by.id("dropdown-class-example"));
        this.checkbox = protractor_1.element(protractor_1.by.id("checkBoxOption1"));
        this.dropdown = protractor_1.element(protractor_1.by.css("#dropdown-class-example [value = 'option1']"));
        this.cliwin = protractor_1.element(protractor_1.by.id("openwindow"));
        this.tab = protractor_1.element(protractor_1.by.id("opentab"));
        this.alrt = protractor_1.element(protractor_1.by.id("alertbtn"));
        this.confmbtn = protractor_1.element(protractor_1.by.id("confirmbtn"));
        this.handfr = protractor_1.element(protractor_1.by.css("a[href*='sign_up']"));
        this.hideshoe = protractor_1.element(protractor_1.by.name('show-hide'));
        this.rows = protractor_1.element.all(protractor_1.by.id("product")).get(0).all(protractor_1.by.tagName('tr'));
        //this.cols = rows.
    }
}
exports.pgobjects = pgobjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBNkM7QUFFN0MsTUFBYSxTQUFTO0lBY2xCLHlCQUF5QjtJQUl6QjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyx3REFBd0QsQ0FBQTtRQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFBO1FBQzlFLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEUsbUJBQW1CO0lBR3ZCLENBQUM7Q0FFSjtBQXRDRCw4QkFzQ0MifQ==