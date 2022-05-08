const CronJob = require('cron').CronJob;
const famousQuotes = require('./famousQuotes');
const { postTweet } = require('./bot');

/**
 * @description Get Random Quote from our list
 * @author im-chandan
 * @returns {*} String 
 */
function getQuotes(){
    return famousQuotes.QUOTES[Math.floor(Math.random()*famousQuotes.QUOTES.length)];
}

//Set CronJob to run our BOT everyday @ Morning 7 AM
new CronJob(
	'0 7 * * *', // everyday at 7 am
	function() {
		// Call Twitter BOT to post new Tweet
        postTweet(getQuotes());
	},
	null,
	true,
	'Asia/Kolkata'
);

// You can directly call postTweet() function to post new Tweet any time