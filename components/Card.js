import Image from "next/image";

export default function Card({
  cardIcon,
  iconWidth,
  iconHeight,
  cardTitle,
  cardDescription,
}) {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <div className="bg-blue-900 rounded-full px-4 py-3">
        <Image src={`/${cardIcon}`} width={iconWidth} height={iconHeight} />
      </div>
      <h2 className="mt-4">{cardTitle}</h2>
      <p className="mt-4">{cardDescription}</p>
    </div>
  );
}
