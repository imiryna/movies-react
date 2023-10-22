import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import {
  HeaderCss,
  NavigationCss,
  NavListcss,
  NavLinkCss,
} from './layoutStylled';

const Layout = () => {
  return (
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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
