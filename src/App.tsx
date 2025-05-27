import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import constants from "./constants.json";
import { Home } from "./Home";
import { PageLayout } from "./PageLayout";
import { Person } from "./Person";

const router = createBrowserRouter([
  ...[...constants.children, ...constants.parents].map((person) => ({
    path: person.path,
    element: (
      <PageLayout>
        <Person person={person} />
      </PageLayout>
    ),
  })),
  {
    path: "/",
    element: (
      <PageLayout home>
        <Home />
      </PageLayout>
    ),
  },
]);

const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);

export default App;
