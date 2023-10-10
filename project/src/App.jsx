import Nav from "./components/Nav";
import { Opening } from "./sections";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <main>
        <Nav />
        <section>
          <Opening />
        </section>
      </main>
    </AppContext.Provider>
  );
}
