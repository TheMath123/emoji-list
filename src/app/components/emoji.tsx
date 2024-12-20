import { Emogi } from "@/@types/emoji";


export function EmojiDisplay(props: Emogi) {
  return (
    <div className="border-r border-b border-gray-300 p-4 flex flex-col gap-2">
      <span className="text-2xl">{props.character}</span>
      <dl className="flex flex-row gap-2 text-sm">
        <dt className="font-medium">Slug:</dt>
        <dd className="bg-gray-100 rounded p-1">
          {props.slug}
        </dd>
      </dl>
      <dl className="flex flex-row gap-2 text-sm">
        <dt className="font-medium">Unicode Name:</dt>
        <dd className="bg-gray-100 rounded p-1">
          {props.unicodeName}
        </dd>
      </dl>
      <dl className="flex flex-row gap-2 text-sm">
        <dt className="font-medium">Group:</dt>
        <dd className="bg-gray-100 rounded p-1">
          {props.group}
        </dd>
      </dl>
    </div>
  );
}
