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
import { useEffect } from "react";

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

export default function EditEditor({
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
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  if (!editor) {
    return (
      <div className="border rounded-md p-4 bg-gray-50">
        <p>Loading editor...</p>
      </div>
    );
  }

  return (
    <div className="border rounded-md shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-4 border-b">
        <ToolbarButton
          label="Bold"
          icon={<FaBold />}
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <ToolbarButton
          label="Italic"
          icon={<FaItalic />}
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <ToolbarButton
          label="Underline"
          icon={<FaUnderline />}
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
        <ToolbarButton
          label="H1"
          icon={<FaHeading />}
          active={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 as const })
              .run()
          }
        />
        <ToolbarButton
          label="H2"
          icon={<FaHeading />}
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 as const })
              .run()
          }
        />
        <ToolbarButton
          label="H3"
          icon={<FaHeading />}
          active={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 3 as const })
              .run()
          }
        />
        <ToolbarButton
          label="Bullet"
          icon={<FaListUl />}
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <ToolbarButton
          label="Ordered"
          icon={<FaListOl />}
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <ToolbarButton
          label="Quote"
          icon={<FaQuoteRight />}
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <ToolbarButton
          label="Code"
          icon={<FaCode />}
          active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
      </div>

      <EditorContent
        editor={editor}
        className="prose max-w-none w-full min-h-[300px] px-4 py-4 focus:outline-none"
      />
    </div>
  );
}

function ToolbarButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 flex items-center gap-1 rounded-md ${
        active
          ? "bg-blue-100 text-blue-600 border border-blue-400"
          : "bg-gray-50 hover:bg-gray-100 border"
      }`}
    >
      {icon} {label}
    </button>
  );
}
