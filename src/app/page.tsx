import { EmojiList } from "./components/emoji-list";

export default async function Home() {
  const response = await fetch(`${process.env.URL_API}?access_key=${process.env.API_KEY}`);
  if (!response.ok) {
    return <div>Failed to fetch data</div>;
  }
  const data = await response.json();

  return <EmojiList data={data} />
}
