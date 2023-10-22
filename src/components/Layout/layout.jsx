import {Outlet } from 'react-router-dom'
import {HeaderCss, NavigationCss, NavListcss,NavLinkCss, } from './layoutStylled'

export const Layout = ()=>{
    return(
    <>
     <div>
     <HeaderCss>
          <NavigationCss>
            <NavListcss>
              <li>
                <NavLinkCss to="/">Home</NavLinkCss>
              </li>
              <li>
                <NavLinkCss to="/movies">Movies</NavLinkCss>
              </li>
            </NavListcss>
          </NavigationCss>
        </HeaderCss>
        <Outlet />
     </div>
    </>
    )
}
