interface Props {
  title: string;
}

const Submit: React.FC<Props> = ({ title }) => {
  return (
    <button type="submit" className="submit-btn">
      {title}
    </button>
  );
};

export default Submit;
