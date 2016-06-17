import Rollbar from 'rollbar';

const rollbar_accessToken = 'e3d3174e59e84bc1abb58dbf62f32dea';
const rollbar_app = 'https://rollbar.com/KrasotCorp/Reduxstagram/';

export function serverError(data, options) {
/**	var Rollbar = require('rollbar'); **/
	Rollbar.init('rollbar_accessToken');	

	// Set the person data to be sent with all errors for this notifier.
	Rollbar.configure({
	  payload: {
	    person: {
	      id: 456,
	      username: "foo",
	      email: "foo@example.com"
	    }
	  }
	});

	//var req = this.req; rollbar.handleError(data, req);
	Rollbar.critical("Connection error from remote Payments API");
	Rollbar.error("Some unexpected condition");
	Rollbar.warning("Connection error from Twitter API");
	Rollbar.info("User opened the purchase dialog");
	Rollbar.debug("Purchase dialog finished rendering");	

	// Can include custom data with any of the above.
	// It will appear as `custom.postId` in the Occurrences tab
	Rollbar.info("Post published", {postId: 123});

	// Callback functions
	Rollbar.error(e, function(err, data) {
	  if (err) {
	    console.log("Error while reporting error to Rollbar: ", e);
	  } else {
	    console.log("Error successfully reported to Rollbar. UUID:", data.result.uuid);
	  }
	});


	/// Rollbar.configure({enabled: false}); - disabling
}

// https://github.com/rollbar/rollbar-sailsjs-example/blob/master/api/responses/serverError.js

// https://rollbar.com/docs/notifier/rollbar.js/



