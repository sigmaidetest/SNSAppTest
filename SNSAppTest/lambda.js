let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	// sns.createPlatformEndpoint({
	// 	PlatformApplicationArn: 'arn:aws:sns:us-east-1:480964559519:app/GCM/Test-GCM-App',
	// 	Token: '12345',
	// 	CustomUserData: 'My Data',
	// 	Attributes: {},
	// }).promise()
	// 	.then(data => {
	// 		console.log(data);
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 	});

	sns.publish({
		Message: 'My message',
		MessageAttributes: {},
		MessageStructure: 'String',
		TargetArn: 'arn:aws:sns:us-east-1:480964559519:endpoint/GCM/Test-GCM-App/15a983de-02ec-34ca-9740-9a6ff727ab98'
	}).promise()
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		});



	callback(null, 'Successfully executed');
}