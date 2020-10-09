# Implementing OAuth 2.0 with Node.js

OAuth2 is an authentication protocol that is used to authenticate and authorize users in an application by using another service provider. 

## OAuth2 flow











## Configuration

The Client Id and Client Secret needed to authenticate with Google can be set up from the Google Developers Console. You may also need to enable Google+ API in the developer console, otherwise user profile data may not be fetched. Google supports authentication with both oAuth 1.0 and oAuth 2.0.

Once you have both those values, you need to edit _passport.js with those values. You will also need to edit callback URL to wherever callback.js is hosted.

This URL also needs to be added to Authorized redirect URIs in your Google Console (edit the Client ID you just created and add the callback URL).


    1.Add your Google API client Id and Client secret and mongodb connection url in the keys.js file in the config folder.

    2.App.js is the main file in this application .

    3.Install all the depedencies in the package.json file
