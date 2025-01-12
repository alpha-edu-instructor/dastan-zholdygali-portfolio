import { useParams } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="page-title">Projects | {id}</h1>
    </div>
  );
};

export default ProjectsPage;
