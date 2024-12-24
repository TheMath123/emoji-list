'use client';
import { useState } from 'react';
import { Emogi } from "@/@types/emoji";
import { EmojiDisplay } from "./emoji";
import { Search } from "lucide-react";

interface EmojiListProps {
  data: Emogi[];
}

export function EmojiList({ data }: EmojiListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const emojis: Emogi[] = Array.isArray(data) ? data : [];

  const filteredEmojis = emojis.filter((emoji) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      emoji.slug.toLowerCase().includes(searchLower) ||
      emoji.group.toLowerCase().includes(searchLower) ||
      emoji.unicodeName.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-4 relative pt-8">
      <div className="fixed inset-y-0 left-0 z-10 flex flex-row gap-2 items-center bg-white border-gray-300 border px-4 h-12 w-full">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, group or unicode name..."
          className="w-full focus:ring-2 py-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-10">
        {filteredEmojis.map((emoji) => (
          <EmojiDisplay key={emoji.slug} {...emoji} />
        ))}
      </main>
    </div>
  );
}