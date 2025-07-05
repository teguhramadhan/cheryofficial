"use client";

export default function AdminFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
      &copy; {new Date().getFullYear()} Cherry Official — All rights reserved.
    </footer>
  );
}
