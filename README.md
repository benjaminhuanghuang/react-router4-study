# React Router4 study project

## References
- React Router v4: The Complete Guide
    - https://www.sitepoint.com/react-router-v4-complete-guide/
    - https://github.com/blizzerand/react-router-v4-demo

## Features of SPA were expected
- Each view in an application should have a URL that uniquely specifies that view
- The browser’s back and forward button should work as expected.
- The dynamically generated nested views should preferably have a URL of their own too.

## Coding features 
- basic navigational routing
- nested routing
- nested routing with path parameters
- protected routing


## Install
React Router has been broken into three packages: 
- react-router
- react-router-dom
- react-router-native

You should almost never have to install react-router directly. That package provides the core routing components and functions for React Router applications. The other two provide environment specific (browser and react-native) components, but they both also re-export all of react-router's exports.

For building a website we will install react-router-dom.
```
    npm install --save react-router-dom
```