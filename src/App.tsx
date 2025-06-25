// App.tsx
import * as React from "react";
import { useEffect, useState } from "react";

import type { User } from "@supabase/supabase-js";
import { Button } from "./components/ui/button.js";
import { supabase } from "./supabase.js";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Hello KChat Web 👋</h1>
      <p>{user ? `Welcome, ${user.email}` : "No user logged in"}</p>
      <Button variant="default">Soy un botón Shadcn</Button>
    </div>
  );
}

export default App;
