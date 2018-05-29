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
 A <Router> may have only one child element
 
## History
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

## Parameter


## Trouble shooting

bundle.js:1010 Warning: Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`.
- If you are using react-router v4 you need to install react-router-dom as well. After that, import BrowseRouter from react-router-dom and switch Router for BrowseRouter.

