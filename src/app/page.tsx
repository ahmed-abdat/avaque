import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/auth/logout-button";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {session ? <LogoutButton /> : null}
        </div>
      </div>
    </div>
  );
}
