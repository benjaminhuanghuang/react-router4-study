
## Apply active styles whenever URL/path matches in React Router
NavLink component is available for styling the Nav items. we need to use NavLink Instead Of Link Component.

```
import { NavLink } from 'react-router-dom';

<NavLink to="/path"> Submit </NavLink>

```
Two Properties are available for styling.

- activeClassName: need to pass the class name.
```
    <li>
        <NavLink exact activeClassName="activeNav" to="/">Home</NavLink>
    </li>
```
- activeStyle: need to pass the styles as an object
```
    <li>
        <NavLink exact activeStyle={{color: "red"}} to="/">Home</NavLink>
    </li>
```
