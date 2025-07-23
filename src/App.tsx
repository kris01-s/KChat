// App.tsx
import * as React from "react";
import { useEffect, useState } from "react";

import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabase.js";
import { AppRoutes } from "./routes/AppRoutes.js";
import { ThemeToggle } from "./components/custom/ThemeToggle.js";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });
  }, []);

  return (
    <div className="bg-[var(--background)] w-screen h-screen flex flex-col overflow-x-hidden relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <AppRoutes />
    </div>
  );
}

export default App;
