import {browser,element,by, ElementFinder} from "protractor";
const apiResource = require("protractor-api-resource").ProtractorApiResource;
//const Request = require("request")

describe("Test response for GET REST API methods", function () {

    var apiClient, serviceEnpoints = {
        getPosts: {
            path: "/posts/:id:"
        },
    };

    it("Test GET method", function (done) {
        apiClient = new apiResource("https://genesys-dev.factset.com/api/v1/workflows?/");
        apiClient.registerService(serviceEnpoints);
        apiClient.getPosts({id: 1}).toJSON().then(function (actualResponse) {
            console.log(actualResponse)
            //expect(actualResponse.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio repreh");
            //browser.params.Title = actualResponse.title
            done();
        });
    });

});