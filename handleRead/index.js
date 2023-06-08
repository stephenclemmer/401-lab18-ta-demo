const dynamoose = require('dynamoose');

export const handler = async(event) => {
    // TODO implement
    console.log('testing ________________', event.queryStringParameters)
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Handle Read!'),
    };
    return response;
};
