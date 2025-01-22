import { LoginForm } from "@/components/auth/login-form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login | Avaque",
  description: "Login to your account",
};

export default function LoginPage() {
  return <LoginForm />;
}
