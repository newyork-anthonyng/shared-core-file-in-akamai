This is a demo that shows how multiple web applications can use the same JavaScript file that was created by webpack.

# Getting started
``` shell
npm install
# Download dependencies

npm run build
# Run webpack

npm run start
# Run local server on localhost:8000
```

# What is this demo
This demo shows 3 web applications. You can view them on:
* `localhost:8000/a`
* `localhost:8000/b`
* `localhost:8000/c`

All 3 web applications use a dependency called `create-html-element`. We want to use `webpack` to extract out this dependency into its own file, `commons.bundle.[chunkhash].js`.

It is best practice to separate out third party code from your own application code. The third party code can be cached longer on the client's browser because it will change less frequently than your application code.

We also want to host this `commons.bundle.[chunkhash].js` file on a different domain. There could be different reasons for wanting to do this, including:
* Hosting the JavaScript file on a CDN
* Having a different team own the `commons.bundle.[chunkhash].js` file

This demo shows how this is possible.

## 1. Make sure all 3 web applications have the same entry point for `commons`
We have 4 webpack configurations. 3 of them are for each of the respective web applications. The 4th one is the one that is created independently and hosted elsewhere, such as AWS/Akamai.

In each of the webpack configurations, we have the same entry point:
``` js
// webpack.config.a.js

module.exports = {
    // ...

    entry: {
        common: ["create-html-element"]
    }

    // ...
}
```

The name and values of the entry have to be the same. The dependencies that we are extracting and reusing (`create-html-element`) also have to be on the same exact versions.

## 2. Run the build and ensure that all files have the same chunk hash
Run `npm run build` and look at the `dist` directory. We should have 4 directories. 3 for each of the web applications, and the 4th for the one that is created independently and hosted elsewhere.

Inside each of the directories, there should be a `commons.bundle.[chunkhash].js` file. If this was done correctly, the `chunkhash` in the filenames should all be the same.

If the `chunkhash` is not the same, it could be because:
* The dependencies we are extracting are on different versions. Check the `package.json` for each web application
* We are not using the correct webpack plugins to extract out the dependencies. Look through `webpack.config.commons.js` for an example; we should be using the `NamedChunksPlugin`, `NamedModulesPlugin`, `NameAllModulesPlugin`, and `CommonsChunkPlugin`.

## 3. Have web applications point to the independently created commons.bundle.[chunkhash].js file
In our project, we are using `html-webpack-plugin` to generate the HTML for our 3 web applications. In our `template.html` file, we are pointing calls to our `commons.bundle.[chunkhash].js` file to a different route, `/akamai`. All other files point to where they would normally go.

Our `/akamai` route is just a placeholder route that we set up in our `express` server (see `server.js`).

Run `npm run start` and navigate through `localhost:8000/a`, `localhost:8000/b`, and `localhost:8000/c`. Look at the `Network` tab and notice how all calls to `commons.bundle.[chunkhash].js` are going through our `/akamai` route.