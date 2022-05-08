require('dotenv').config();
const Twit = require('twit');
const client = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/**
 * @description This function will post new Tweet
 * @author im-chandan
 * @param {*} message Content which bot will tweet
 * @returns {*} Object
 */
const postTweet = (message) => {    
    console.log('postTweet...');
    return new Promise((resolve, reject) => {
        client.post("statuses/update", {
            status: message
        }, (error, data, response) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
};

module.exports = { postTweet };