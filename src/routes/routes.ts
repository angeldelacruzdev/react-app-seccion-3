import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  to: string;
  name: string;
}

const lazyOne = lazy(
  () =>
    import(
      /** webpackChunkName: "LazyPage1" */ "../components/lazyload/pages/LazyPageOne"
    )
);
const lazyTwo = lazy(
  () =>
    import(
      /** webpackChunkName: "LazyPage2" */ "../components/lazyload/pages/LazyPageTwo"
    )
);
const lazyThree = lazy(
  () =>
    import(
      /** webpackChunkName: "LazyPage3" */ "../components/lazyload/pages/LazyPageThree"
    )
);

export const routes: Route[] = [
  {
    to: "/lazy-1",
    path: "lazy-1",
    Component: lazyOne,
    name: "Lazy Page One",
  },
  {
    to: "/lazy-2",
    path: "lazy-2",
    Component: lazyTwo,
    name: "Lazy Page Two",
  },
  {
    to: "/lazy-3",
    path: "lazy-3",
    Component: lazyThree,
    name: "Lazy Page Three",
  },
];
