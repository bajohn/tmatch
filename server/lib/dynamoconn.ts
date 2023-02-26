import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";



export const listTables = async () => {
    const client = getDynamoClient();
    const command = new ListTablesCommand({});
    return await client.send(command);
}

const getDynamoClient = () => {
    return new DynamoDBClient({
        region: 'us-east-1',
    });
};

const checkCreds = async () => {
    const client = getDynamoClient();
    const resp = await client.config.credentials();
    console.log(resp);
}


