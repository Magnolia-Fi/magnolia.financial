import { SquigglyLine } from "./SquigglyLine";

export type TenetsItemProps = {
  idx: number;
  title: string;
  description: React.ReactNode; // Changed from string to ReactNode
};

export const TenetsItem = ({ idx, title, description }: TenetsItemProps) => {
  return (
    <div className="flex flex-col items-center gap-[48px]">
      <SquigglyLine className="mx-auto w-[200px] h-[50px]" />
      <p className="text-[24px] font-bold bg-black text-white p-[8px]">
        <span className="font-aktiv-grotesk text-[#FFE63D] mr-2">{idx}</span>
        {title}
      </p>
      <div className="text-[24px] text-center">{description}</div>
    </div>
  );
};
