// App.tsx
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

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
    </div>
  );
}

export default App;
