interface Props {
  title: string;
  subTitle: string;
}

const StatsTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="text-xl md:text-4xl text-black dark:text-white">
      <h3>{title}</h3>
      <h6 className="text-sm font-normal">{subTitle}</h6>
    </div>
  );
};

export default StatsTitle;
