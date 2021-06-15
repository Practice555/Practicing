"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        apiClient.getPosts({ id: 1 }).toJSON().then(function (actualResponse) {
            console.log(actualResponse);
            //expect(actualResponse.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio repreh");
            //browser.params.Title = actualResponse.title
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztBQUM3RSxvQ0FBb0M7QUFFcEMsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO0lBRS9DLElBQUksU0FBUyxFQUFFLGVBQWUsR0FBRztRQUM3QixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsYUFBYTtTQUN0QjtLQUNKLENBQUM7SUFFRixFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxJQUFJO1FBQ2hDLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQ2xGLFNBQVMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLGNBQWM7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQiw4R0FBOEc7WUFDOUcsNkNBQTZDO1lBQzdDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=