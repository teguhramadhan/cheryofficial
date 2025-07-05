"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { UserCircleIcon } from "lucide-react";
import LogoutButton from "./LogoutButton";
import ProfileSetting from "./ProfileSetting";

export default function UserProfileDropdown({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800 transition"
      >
        <UserCircleIcon className="text-lg" />
        <span className="text-md font-semibold">{email}</span>
        <FiChevronDown
          className={`transform transition-transform duration-200 w-4 h-4 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-auto bg-white border border-slate-200 shadow-lg z-50">
          <ProfileSetting />
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
