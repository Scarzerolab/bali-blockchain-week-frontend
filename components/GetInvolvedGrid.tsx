
import Image from "next/image";
import clsx from "clsx";

const divisions = [
  {
    game: "Mobile Legends",
    description: "MPL ID Finalists",
    color: "from-red-500 to-orange-500",
    image: "/artifacts/game_mlbb_1769169559079.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    game: "PUBG Mobile",
    description: "PMPL SEA Finalists",
    color: "from-blue-500 to-cyan-500",
    image: "/artifacts/game_pubg_1769169580136.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    game: "Valorant",
    description: "VCT Pacific Contenders",
    color: "from-green-500 to-emerald-500",
    image: "/artifacts/game_valorant_1769169596083.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    game: "Honor of Kings",
    description: "HOK SEA Championship",
    color: "from-purple-500 to-pink-500",
    image: "/artifacts/game_dota_1769169614717.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function GetInvolvedGrid() {
  return (
    <section id="division" className="py-20 bg-black relative z-10 px-4">
      <h2 className="text-6xl font-bebas text-center mb-16 text-white">
        Our Divisions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-7xl mx-auto h-[1000px] md:h-[600px]">
        {divisions.map((div, i) => (
          <Card key={i} {...div} />
        ))}
      </div>
    </section>
  );
}

function Card({ game, description, color, image, className }: {
  game: string;
  description: string;
  color: string;
  image: string;
  className: string;
}) {
  return (
    <div
      className={clsx(
        "group relative border border-white/10 bg-neutral-900 overflow-hidden rounded-xl shadow-2xl",
        className
      )}
    >
      <Image
        src={image}
        alt={game}
        fill
        className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-4xl font-bebas text-white mb-2 leading-none">
          {game}
        </h3>
        <p className="text-gray-300 font-manrope text-sm">{description}</p>
        <div className={`mt-4 h-1 w-10 bg-gradient-to-r ${color} rounded-full`} />
      </div>
    </div>
  );
}