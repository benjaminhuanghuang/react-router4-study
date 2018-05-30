- https://www.sitepoint.com/react-router-v4-complete-guide/
```
/* PrivateRoute component definition */
const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}
```

```
/* Add the PrivateRoute component to the existing Routes */
<Switch>
  <Route exact path="/" component={Home} data={data}/>
  <Route path="/category" component={Category}/>
  <Route path="/login" component={Login}/>
  <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />
</Switch>
```