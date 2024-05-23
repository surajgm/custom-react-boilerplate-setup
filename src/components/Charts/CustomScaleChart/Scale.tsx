const gradientStyle = {
  background:
    'linear-gradient(90deg, rgba(15,166,30,1) 0%, rgba(220,212,26,1) 33%, rgba(220,212,26,1) 49%, rgba(220,212,26,1) 70%, rgba(209,51,51,1) 98%)',
};
export const Scale = ({ percent = 60 }) => {
  const translateIconXStyle = {
    left: `${percent}%`,
    transform: 'translateX(-50%)',
  };
  const translateValueXStyle = {
    left: `${percent}%`,
    transform: 'translateX(-50%)',
  };
  return (
    <div className="relative w-full">
      <div style={gradientStyle} className="w-full h-2 rounded-2xl"></div>
      <div
        style={translateIconXStyle}
        className="absolute top-[10px] transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-tprimary-600"
      />
      <span
        className="absolute top-[16px] text-tprimary-600 font-semibold text-sm"
        style={translateValueXStyle}
      >
        {percent}%
      </span>
    </div>
  );
};
