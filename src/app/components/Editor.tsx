"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import Placeholder from "@tiptap/extension-placeholder";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaCode,
} from "react-icons/fa";

export default function Editor({
  content,
  onChange,
}: {
  content: string;
  onChange: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,
      Placeholder.configure({
        placeholder: "Tulis konten artikelmu di sini...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded-md shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-4 border-b">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("bold")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaBold /> Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("italic")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaItalic /> Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("underline")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaUnderline /> Underline
        </button>

        {/* Heading 1 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaHeading /> 1
        </button>

        {/* Heading 2 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaHeading /> 2
        </button>

        {/* Heading 3 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaHeading /> 3
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("bulletList")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaListUl /> Bullet
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("orderedList")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaListOl /> Ordered
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("blockquote")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaQuoteRight /> Quote
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-2 flex items-center gap-1 rounded-md bg-gray-50 hover:bg-gray-100 transition ${
            editor.isActive("codeBlock")
              ? "bg-blue-100 text-blue-600 border border-blue-400"
              : "border"
          }`}
        >
          <FaCode /> Code
        </button>
      </div>

      {/* EditorContent wrapper sendiri */}
      <div className="w-full focus-within:ring-2 focus-within:ring-blue-500 transition">
        <EditorContent
          editor={editor}
          className="prose w-full min-h-[300px] px-4 focus:outline-none border-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
