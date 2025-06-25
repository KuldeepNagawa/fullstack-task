import React, { useState, useEffect } from "react";
import api from "../api/axios";

function AdminDashboard() {
  const [project, setProject] = useState({ name: "", description: "", image: null });
  const [client, setClient] = useState({ name: "", designation: "", description: "", image: null });
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // Fetch contact form and subscribers
  useEffect(() => {
    api.get("/contacts").then(res => setContacts(res.data));
    api.get("/subscribers").then(res => setSubscribers(res.data));
  }, []);

  // Submit project with image
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("image", project.image);

    await api.post("/projects/add", formData);
    alert("Project added");
    setProject({ name: "", description: "", image: null });
  };

  // Submit client with image
  const handleClientSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("designation", client.designation);
    formData.append("description", client.description);
    formData.append("image", client.image);

    await api.post("/clients/add", formData);
    alert("Client added");
    setClient({ name: "", designation: "", description: "", image: null });
  };

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>

      {/* Add Project */}
      <div className="bg-base-100 p-5 rounded shadow space-y-3">
        <h2 className="text-xl font-semibold">Add Project</h2>
        <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input input-bordered" placeholder="Project Name" value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })} />
          <input className="input input-bordered" placeholder="Project Description" value={project.description}
            onChange={(e) => setProject({ ...project, description: e.target.value })} />
          <input type="file" className="file-input file-input-bordered" onChange={(e) => setProject({ ...project, image: e.target.files[0] })} />
          <button type="submit" className="btn btn-primary">Add Project</button>
        </form>
      </div>

      {/* Add Client */}
      <div className="bg-base-100 p-5 rounded shadow space-y-3">
        <h2 className="text-xl font-semibold">Add Client</h2>
        <form onSubmit={handleClientSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input input-bordered" placeholder="Client Name" value={client.name}
            onChange={(e) => setClient({ ...client, name: e.target.value })} />
          <input className="input input-bordered" placeholder="Designation" value={client.designation}
            onChange={(e) => setClient({ ...client, designation: e.target.value })} />
          <input className="input input-bordered" placeholder="Description" value={client.description}
            onChange={(e) => setClient({ ...client, description: e.target.value })} />
          <input type="file" className="file-input file-input-bordered" onChange={(e) => setClient({ ...client, image: e.target.files[0] })} />
          <button type="submit" className="btn btn-secondary">Add Client</button>
        </form>
      </div>

      {/* Contact Form Submissions */}
      <div className="bg-base-100 p-5 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Full Name</th><th>Email</th><th>Mobile</th><th>City</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id}>
                  <td>{c.fullName}</td>
                  <td>{c.email}</td>
                  <td>{c.mobile}</td>
                  <td>{c.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscribers */}
      <div className="bg-base-100 p-5 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Newsletter Subscribers</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr><th>Email</th></tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s._id}>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
