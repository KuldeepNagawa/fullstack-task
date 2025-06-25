function ProjectCard({ project }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure><img src={project.imageUrl} alt={project.name} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
