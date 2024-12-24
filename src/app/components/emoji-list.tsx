import { Emogi } from "@/@types/emoji";
import { EmojiDisplay } from "./emoji";

export async function EmojiList() {
  const response = await fetch(`${process.env.URL_API}?access_key=${process.env.API_KEY}`);
  if (!response.ok) {
    return <div>Failed to fetch data</div>;
  }
  const emojis: Emogi[] = await response.json();

  return <main className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-10">
    {emojis.map((emoji) => (
      <EmojiDisplay key={emoji.slug} {...emoji} />
    ))}
  </main>;
}