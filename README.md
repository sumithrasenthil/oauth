**Implementing OAuth 2.0 with Node.js **

OAuth2 is an authentication protocol that is used to authenticate and authorize users in an application by using another service provider. 

**OAuth2 flow**
Let’s take a brief look at the OAuth protocol before we jump into implementation. If you’ve ever seen a dialog similar to this, then you probably have some idea of what OAuth is:

![oauth-example-screenshot-small](https://user-images.githubusercontent.com/54926196/69163413-28347780-0b14-11ea-9419-818101317ff0.jpeg)




In the above image, we are trying to login to Gitlab using Github to authenticate.
There are three parties in any OAuth flow:
The client - The person, or user who is logging in
The consumer - The application that the client wants to log in to (which was gitlab in the above image)
The service provider - The external application through which the user authenticates. (which was github in the above image)
 In this post, we will authenticate using Google  OAuth2 API, and build a sample node application, running on the local port 8080, with a web interface. So in our case, the client would be the web interface, the consumer would be the application running on localhost:8080 and the service provider would be Google. Let’s look at how this would all work:





![B2B-Use-Case-New-Page](https://user-images.githubusercontent.com/54926196/69162910-5796b480-0b13-11ea-800b-a251c743acc5.jpeg)







Configuration

The Client Id and Client Secret needed to authenticate with Google can be set up from the Google Developers Console. You may also need to enable Google+ API in the developer console, otherwise user profile data may not be fetched. Google supports authentication with both oAuth 1.0 and oAuth 2.0.

Once you have both those values, you need to edit _passport.js with those values. You will also need to edit callback URL to wherever callback.js is hosted.

This URL also needs to be added to Authorized redirect URIs in your Google Console (edit the Client ID you just created and add the callback URL).

If you copy these snippets to your project. Be sure to change URLs in each file.

