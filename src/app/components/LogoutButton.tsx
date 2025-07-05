"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center lg:justify-start gap-2 px-4 py-4 text-slate-700 hover:bg-slate-50 hover:text-red-600 transition group"
    >
      <LogOut className="w-5 h-5 group-hover:animate-bounce" />
      <span className="text-md font-normal">Logout Account</span>
    </button>
  );
}
