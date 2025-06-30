"use client";

import { useEffect, useState } from "react";

export default function SuccessAlert({ message }: { message: string }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
      {message}
    </div>
  );
}
