## React-router packages
react-router       # core component
react-router-dom   # for dom 
react-router-native
react-router-redux 
react-router-config

$ yarn add react-router-dom

在 React 的使用中，我们一般要引入两个包，react 和 react-dom，那么 react-router 和 react-router-dom 是不是两个都要引用呢？
他们两个只要引用一个就行了，不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件。
因此我们只需引用 react-router-dom 这个包就行了. 如果搭配 redux ，还需要使用 react-router-redux。


## Adding routing features. 
Instead of rendering the Home component, we import Router and Route and use them to render the component.

```
render(<Home />, document.getElementById('app'));

To

render(
    <Router>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('app')
);
```

## History
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

## Parameter


## Trouble shooting

bundle.js:1010 Warning: Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`.
- If you are using react-router v4 you need to install react-router-dom as well. After that, import BrowseRouter from react-router-dom and switch Router for BrowseRouter.

