import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children} </div>
    </>
  );
}

export default Layout;
