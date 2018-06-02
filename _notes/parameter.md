## Define the route
```
<Route path="/songs/:id" component={SongDetail} />
```

## Read parameter in component
```
    <LyricCreate songId={this.props.match.params.id} />
```