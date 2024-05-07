type ModuleItemProps = React.HTMLAttributes<HTMLDivElement> & {
  svg: string;
  title: string;
  // onClick: () => void;
};

export const ModuleItem = ({ svg, title, ...props }: ModuleItemProps) => {
  return (
    <div
      role="button"
      className="w-[260px] bg-primary-800 p-11 rounded-[20px] flex flex-col gap-[15px] justify-center items-center hover:opacity-80"
      {...props}
    >
      <img className="w-[100px] h-[100px]" src={svg} alt={title} />
      <strong className="text-lg font-semibold">{title}</strong>
    </div>
  );
};
