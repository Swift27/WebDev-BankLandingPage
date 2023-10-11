import { Nav, Opening } from "./sections";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <main className="w-full bg-white">
        <section className="relative z-10 bg-white">
          <Nav />
        </section>
        <section className="w-full bg-gradient-to-b from-light-grayish-blue to-white">
          <Opening />
        </section>
      </main>
    </AppContext.Provider>
  );
}
