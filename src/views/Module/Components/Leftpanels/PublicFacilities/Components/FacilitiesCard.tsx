type FacilitiesProps = {
  icon: string;
  value: number;
  title: string;
};

export const FacilitiesCard = ({ icon, value, title }: FacilitiesProps) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-5 py-4 rounded-2xl bg-primary-300">
      <div className="flex items-center gap-2">
        <img src={icon} alt={title} />
        <strong className="text-2xl font-semibold text-tgray-800">
          {value}
        </strong>
      </div>
      <span className="text-lg font-medium text-center text-tgray-600">
        {title}
      </span>
    </div>
  );
};
