function ClientCard({ client }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure><img src={client.imageUrl} alt={client.name} className="h-48 w-full object-cover" /></figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-bold">{client.name}</h2>
        <p className="italic">{client.designation}</p>
        <p>{client.description}</p>
      </div>
    </div>
  );
}
export default ClientCard;
