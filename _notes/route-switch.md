## Route

The <Route> component is the most important component in React router. It renders some UI if the current location matches the route’s path. Ideally, a <Route> component should have a prop named path, and if the pathname is matched with the current location, it gets rendered.

The <Link> component, on the other hand, is used to navigate between pages. It’s comparable to the HTML anchor element. However, using anchor links would result in a browser refresh, which we don’t want. So instead, we can use <Link> to navigate to a particular URL and have the view re-rendered without a browser refresh.

<Route> has three props that you can you use to define what gets rendered:

- component. When the URL is matched, the router creates a React element from the given component using React.createElement.

- render. This is handy for inline rendering. The render prop expects a function that returns an element when the location matches the route’s path.

- children. The children prop is similar to render in that it expects a function that returns a React element. However, children gets rendered regardless of whether the path is matched with the location or not.


## Switch

<Route>s can be created anywhere inside of the router, but often it makes sense to render them in the same place. You can use the<Switch> component to group <Route>s. The <Switch> will iterate over its children elements (the routes) and only render the first one that matches the current pathname.

How is this different than just using a bunch of <Route>s?
- https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md
```
<Fade>
  <Switch>
    {/* there will only ever be one child here */}
    <Route/>
    <Route/>
  </Switch>
</Fade>

<Fade>
  <Route/>
  <Route/>
  {/* there will always be two children here,
      one might render null though, making transitions
      a bit more cumbersome to work out */}
</Fade>
```

