const HeaderIcon = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <span className="text-xs opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </span>
    </div>
  );
};

export default HeaderIcon;
