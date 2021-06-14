import { ElementArrayFinder, ElementFinder } from "protractor";
import {browser,element,by} from "protractor"

export class pgobjects
{
    Text:ElementFinder;
    url:string
    ASuggetions:ElementFinder
    dropdown:ElementFinder
    checkbox :ElementFinder
    cliwin:ElementFinder
    tab:ElementFinder
    alrt:ElementFinder
    confmbtn:ElementFinder
    handfr:ElementFinder
    hideshoe:ElementFinder
    rows:ElementArrayFinder
    //cols:ElementArrayFinder



    constructor()
    {
        this.Text = element(by.tagName("h1"))
        this.url = "https://www.rahulshettyacademy.com/AutomationPractice/"
        this.ASuggetions = element(by.id("autocomplete"))
        this.dropdown = element(by.id("dropdown-class-example"))
        this.checkbox = element(by.id("checkBoxOption1")) 
        this.dropdown = element(by.css("#dropdown-class-example [value = 'option1']"))
        this.cliwin = element(by.id("openwindow"))
        this.tab = element(by.id("opentab"))
        this.alrt = element(by.id("alertbtn"))
        this.confmbtn = element(by.id("confirmbtn"))
        this.handfr = element(by.css("a[href*='sign_up']"))
        this.hideshoe = element(by.name('show-hide'))
        this.rows = element.all(by.id("product")).get(0).all(by.tagName('tr'))
        //this.cols = rows.


    }

}