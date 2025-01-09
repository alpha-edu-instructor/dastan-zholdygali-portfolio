interface Props {
  isFullPage?: boolean;
}

const Loader: React.FC<Props> = ({ isFullPage = false }) => {
  if (isFullPage) {
    return (
      <div className="loader-full__wrapper">
        <span className="loader-full"></span>
      </div>
    );
  }

  return <span className="loader"></span>;
};

export default Loader;
