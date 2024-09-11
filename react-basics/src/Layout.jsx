import { Products } from "./Products";
import Todo from "./Todo";

function Layout({ children }) {
  return (
    <>
      <header>this is header</header>
      <sidebar>sidebar</sidebar>
      {children}
      <footer>footer</footer>
    </>
  );
}

function ProductLayout() {
  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}

function TodoLayout() {
  return (
    <>
      <Layout>
        <Todo />
      </Layout>
    </>
  );
}

function App() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export default App;
