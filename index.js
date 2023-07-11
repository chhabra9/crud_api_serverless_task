const { APIGatewayProxyHandler } = require('aws-lambda');

const handler=(event, context) =>{
    console.log("Event", event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World",
        })
    };
}