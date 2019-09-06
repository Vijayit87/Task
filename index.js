const express = require('express')
    bodyParser = require('body-parser'),
    app = express()
	port = 3444;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post("/api/v1/parse", (req, res) => {
	if (req.body.data) {
		let reqString = req.body.data;

		var responseData = {};
		var response = temp = [];
		var k = 0;
		var charArray = reqString.split("");

		for (var i = 0; i < charArray.length; i++) {
			if (charArray[i] == 0 && charArray[i+1] != 0 ) {
				response[k] = temp +''+ charArray[i];
				temp = "";
				k++;
			} else {
				temp = temp +''+ charArray[i];
			}
		}
		response[k] = temp;
		
		var keys = ["firstName", "lastName", "clientid"];

		for (k = 0; k < keys.length; k++) {
			responseData[keys[k]] = response[k];
		}
		
		res.status(200).send({statusCode: 200, data: responseData});
	} else {
		res.status(200).send({statusCode: 200, message: "Empty Request body"});
	}
});

app.post("/api/v2/parse", (req, res) => {
	if (req.body.data) {
		let reqString = req.body.data;
		// console.log(reqString.split(/[0]{1,}/i));
		// var response = reqString.split(/[0]{1,}/i);

		response = reqString.split("0").filter((e) => { if (e != "") return true });
		
		var responseData = {};
		var keys = ["firstName", "lastName", "clientid"];

		for (k = 0; k < keys.length; k++) {
			responseData[keys[k]] = response[k];
		}
		res.status(200).send({statusCode: 200, data: responseData});
	} else {
		res.status(200).send({statusCode: 200, message: "Empty Request body"});
	}
});

app.listen(port, () => console.log("Application booted Successfully!"));