![Should you buy?](./icon/Should_you_buy_.png)
---


# Why I did this?

In the internet, there are some tutorials of how to make a Twitter Bot but most of them are old and not very usefull after all. And this is an example how to make it the easy way.

# Step-by-Step

## Create a Twitter Account
First step is to create a Twitter Account for the bot. Nothing fancy, nothing special.

## Developer Program
1. Already signed-in with your new account, head to [Developer Portal](https://developer.twitter.com/) and register your developer account.

2. Once in the Developer Portal, head to ***Projects & Apps*** and click *Add App*.

3. In App Environment select **Production**, write the name of the App and finally save the Keys and Tokens.

4. In your app, head to **User authentication settings** and start the *Set Up*

5. In *App permissions* choose the desired option for your app, same goes for Type of App.

6. In *App info* in the Callback URL/Redirect URL, if you don't have one you can write your IP and PORT. Fill the Website URL, if you don't have one add your GitHub Profile.

7. Save!

8. Go to *Keys and tokens* and generate the missing tokens.

Now you have everything set-up to start coding. 😁

# Code
Before start, remember to store your tokens in a .env file, you don't want to share your keys to the world 😫

For this to work, run `npm init` and `npm i`. The packages that will be installed are:
  - *cron*: for scheduled jobs
  - *twitter-api-v2*: authentication
  - *dotenv*: private keys 👀
  - *node-fetch*: self-explanatory
  
 Go to the `twitterClient.js` and you will see the usage of .env and the constrcutor for the authentication of Twitter.
 
 ### Main Code
 This bot is basically fetching an API that provides the value of the Dolar Blue for Argentina and tweets every hour between 09:00 to 17:00 from Monday to Friday, with a variety of messages.
 
 
 
 ***After Heroku annouced that it will no longer be free, I'm looking for a viable option that is not using a Rasperry Pi.***
 
 # Contact
 If you want to contact me you can go to my [Twitter](https://twitter.com/0xKoller) or my [email](mailto:joseluiskoller98@gmail.com). 
