
Endpoints

/api/v1/parse (POST)
/api/v2/parse (POST)

Request Body
```json
{
    data: “JOHN0000MICHAEL0009994567”
}
```


Expected Results
/api/v1/parse – Response Body
```json
{
    statusCode: 200,
    data:  {
        firstName: “JOHN0000”,
        lastName: “MICHAEL000”,
        clientId: “9994567”
    }
}
```

/api/v2/parse – Response Body
```json
{
    statusCode: 200,
    data:  {
        firstName: “JOHN”,
        lastName: “MICHAEL”,
        clientId: “999-4567”
    }
}
```
