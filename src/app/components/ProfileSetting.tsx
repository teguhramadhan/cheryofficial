"use client";

import { Settings } from "lucide-react";

export default function ProfileSetting() {
  return (
    <button className="w-full flex items-center justify-start gap-2 px-4 py-4 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition group">
      <Settings className="w-5 h-5 group-hover:animate-bounce" />
      <span className="text-md font-normal">Profile Setting</span>
    </button>
  );
}
