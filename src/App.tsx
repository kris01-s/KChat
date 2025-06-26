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
    <div className="  w-screen h-screen flex flex-col items-start justify-start">
      <ThemeToggle />
      <AppRoutes />
    </div>
  );
}

export default App;
