import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? "nav-active" : ""} {...props} to={resolved.pathname}>
        {children}
      </Link>
    </div>
  );
};
