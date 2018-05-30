## Redirect vs Auth
```
class AuthorizedRoute extends React.Component {
  componentWillMount() {
    getLoggedUser()
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...this.props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}
```