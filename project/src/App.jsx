import { Nav, Opening, Features, Articles, Footer } from "./sections";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <main className="w-full bg-white relative z-20 overflow-hidden">
        <section className="relative z-10 bg-white">
          <Nav />
        </section>
        <section
          className={`w-full ${
            showMenu
              ? "bg-gradient-to-b from-dark-blue to-white"
              : "bg-gradient-to-b from-light-grayish-blue to-white"
          }`}
        >
          <Opening />
        </section>
        <section className="w-full bg-light-grayish-blue">
          <Features />
        </section>
        <section className="relative bg-gradient-to-b from-white to-light-grayish-blue">
          <Articles />
        </section>
        <section className="relative bg-dark-blue">
          <Footer />
        </section>
      </main>
    </AppContext.Provider>
  );
}
