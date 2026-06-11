function Starburst() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M14 2l2.1 4.5 4.9-1-1 4.9L24.5 12 22 14l2.5 2-4.5 1.6 1 4.9-4.9-1L14 26l-2.1-4.5-4.9 1 1-4.9L3.5 16 6 14 3.5 12l4.5-1.6-1-4.9 4.9 1z"
        stroke="#11633A"
        strokeWidth="1.5"
        fill="#11633A"
      />
    </svg>
  );
}

function Strip({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-5 pr-10">
          <Starburst />
          <span
            className="text-[2.5rem] font-black uppercase leading-none tracking-wide sm:text-[4rem]"
            style={{ WebkitTextStroke: "2px #11633A", color: "transparent" }}
          >
            {item}
          </span>
        </span>
      ))}
    </>
  );
}

export default function ServicesTicker({ items }: { items: string[] }) {
  return (
    <div className="w-full overflow-hidden border-y border-gray-100 bg-white py-5">
      <div
        className="flex w-max will-change-transform"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        <span className="flex shrink-0">
          <Strip items={items} />
        </span>
        <span className="flex shrink-0">
          <Strip items={items} />
        </span>
      </div>
    </div>
  );
}
