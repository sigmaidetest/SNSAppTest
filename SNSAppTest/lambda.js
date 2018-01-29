let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.createPlatformEndpoint({
		PlatformApplicationArn: 'arn:aws:sns:us-east-1:480964559519:app/GCM/Test-GCM-App',
		Token: '12345',
		CustomUserData: 'My Data',
		Attributes: {},
	}).promise()
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		});


	callback(null, 'Successfully executed');
}