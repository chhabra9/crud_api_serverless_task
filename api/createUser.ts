import { APIGatewayProxyHandler } from 'aws-lambda';

export const createUserHandler: APIGatewayProxyHandler = async (event:any,context:any) => {
    console.log("Event",event);
return {  
    statusCode: 200,
    body: JSON.stringify({
        message: "Hello World",
    })
}
}