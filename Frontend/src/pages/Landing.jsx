import React, { useEffect, useRef, useState } from "react";
import api from '../api/axios';

function Landing() {
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', city: '' });
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    api.get('/projects/')
      .then(res => {
        if (res.data.length > 0) {
          // Combine real and dummy projects
          const combined = [...res.data, ...dummyProjects];
          setProjects(combined);
        } else {
          setProjects(dummyProjects);
        }
      })
      .catch(() => setProjects(dummyProjects));

    api.get('/clients/')
      .then(res => {
        if (res.data.length > 0) {
             // Combine real and dummy projects
          const combined = [...res.data, ...dummyClients];
          setProjects(combined);
        } else {
          setClients(dummyClients);
        }
      })
      .catch(() => setClients(dummyClients));
  }, []);

  const dummyProjects = [
    {
      name: "Smart Living",
      description: "A smart home automation dashboard.",
      imageUrl: "https://kinitanea.gr/wp-content/uploads/2024/08/OrshelSmartDay2.jpg"
    },
    {
      name: "Fitness Pro",
      description: "Modern UI for a fitness training website.",
      imageUrl: "https://images.unsplash.com/photo-1730127429838-7201bd37fe4a"
    },
    {
      name: "EduLearn",
      description: "Online course platform landing page.",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095"
    },
    {
      name: "FoodBuddy",
      description: "Restaurant and food delivery site.",
      imageUrl: "https://images.firstpost.com/wp-content/uploads/2019/07/Image-spyce.jpg"
    },
    {
      name: "TravelGo",
      description: "Travel booking and itinerary planner.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    }
  ];

  const dummyClients = [
    {
      name: "Ravi Sharma",
      designation: "CEO, WebNest",
      description: "They understood our vision and brought it to life!",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Kaur",
      designation: "Marketing Head, AdiCorp",
      description: "Great designs and even better team spirit.",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "John Paul",
      designation: "Developer, SoftTech",
      description: "We’ve worked on 3 projects already. Amazing work!",
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Ananya Rao",
      designation: "CTO, Finzii",
      description: "The UI/UX they deliver is top-class!",
      imageUrl: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
      name: "Ahmed Khan",
      designation: "Founder, Digideck",
      description: "Quick turnaround, bug-free delivery. Loved it!",
      imageUrl: "https://randomuser.me/api/portraits/men/28.jpg"
    }
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await api.post('/contacts/add', form);
    alert('Contact form submitted!');
    setForm({ fullName: '', email: '', mobile: '', city: '' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    await api.post('/subscribers/add', { email: subscriberEmail });
    alert('Subscribed!');
    setSubscriberEmail('');
  };

  return (
    <div className="bg-white text-gray-800">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="font-bold text-xl">BrandName</div>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={scrollToProjects}>Services</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={scrollToAbout}>About Us</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={scrollToContact}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
<section
  className="relative w-full h-screen bg-cover bg-center flex items-center justify-between px-6"
  style={{
    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cynap-pure_business-meeting_%2846796915672%29.jpg/1200px-Cynap-pure_business-meeting_%2846796915672%29.jpg')`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Left Text Content */}
  <div className="relative z-10 w-full md:w-1/2 text-white px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Consultation,<br />
      Design,<br />
      & Marketing
    </h1>
    <p className="text-lg md:text-xl">
      Your one-stop solution for digital transformation
    </p>
  </div>

  {/* Right Side Form */}
  <form
    ref={contactRef}
    onSubmit={handleContactSubmit}
    className="relative z-10 bg-[#3b4a6b] p-6 rounded-lg shadow-lg w-full max-w-md md:mr-16 mt-10 md:mt-0 text-white"
  >
    <h2 className="text-2xl font-bold text-center mb-6">Get a Free Consultation</h2>

    <input
      className="w-full mb-4 px-4 py-2 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
      placeholder="Full Name"
      value={form.fullName}
      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
    />
    <input
      className="w-full mb-4 px-4 py-2 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
      placeholder="Enter Email Address"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />
    <input
      className="w-full mb-4 px-4 py-2 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
      placeholder="Mobile Number"
      value={form.mobile}
      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
    />
    <input
      className="w-full mb-6 px-4 py-2 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
      placeholder="Area, City"
      value={form.city}
      onChange={(e) => setForm({ ...form, city: e.target.value })}
    />
    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition">
      Get Quick Quote
    </button>
  </form>
</section>



<section className="relative w-full bg-blue-50 py-16 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
  {/* Left Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
      Not Your Average Realtor
    </h2>
    <p className="text-gray-600 max-w-md mx-auto md:mx-0">
      Real Trust has an eye for standout property features, standout content writing design, and effective marketing to get homes seen by qualified online buyers.
    </p>
  </div>

  {/* Right Side Images */}
  <div className="relative w-full md:w-1/2 h-[320px] flex justify-center items-center">
    {/* Center big image */}
    <img
      src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
      alt="Main"
      className="w-48 h-48 rounded-full object-cover z-10 border-4 border-white shadow-lg"
    />

    {/* Top right image */}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfyTic8qbL9axf5CNkXAbg10FZ8iD9_cfWA&s"
      alt="Top Right"
      className="w-28 h-28 rounded-full object-cover absolute top-0 right-10 border-4 border-white shadow-lg"
    />

    {/* Bottom right image */}
    <img
      src="data:image/jpeg;base64,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"
      alt="Bottom Right"
      className="w-48 h-48 rounded-full object-cover absolute bottom-0 right-0 border-4 border-white shadow-lg"
    />
  </div>
</section>



<section ref={aboutRef} className="w-full py-16 px-4 sm:px-8 bg-sky-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-sky-500 mb-8">About Us</h1>

        <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>When years of injustice with war are the steadfast customer service and is</p>
          <p>Authority world to work hard, there will follow through the solution quality analysis to</p>
          <p>Build relationships with children and more importantly, inclusion ideas whilst making</p>
          <p>By community coming effectively.</p>
        </div>

        <div className="mt-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>



{/* Why Choose Us */}
<section className="bg-blue-50 py-12 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="card shadow p-5 items-center bg-white rounded-lg">
      <div className="text-5xl text-blue-500 mb-4">👨‍🏫</div>
      <h3 className="font-bold text-xl mb-1">Mentorship</h3>
      <p className="text-gray-600 text-center">Expert advice and support tailored for your business growth.</p>
    </div>
    <div className="card shadow p-5 items-center bg-white rounded-lg">
      <div className="text-5xl text-pink-500 mb-4">🎨</div>
      <h3 className="font-bold text-xl mb-1">Design</h3>
      <p className="text-gray-600 text-center">Modern, responsive, user-focused interfaces and visuals.</p>
    </div>
    <div className="card shadow p-5 items-center bg-white rounded-lg">
      <div className="text-5xl text-green-500 mb-4">📈</div>
      <h3 className="font-bold text-xl mb-1">Marketing</h3>
      <p className="text-gray-600 text-center">Lead-driven strategies to scale and capture attention.</p>
    </div>
  </div>
</section>


      {/* Projects */}
      <section ref={projectRef} className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Our Projects</h2>
        <p className="text-center text-gray-600 mb-10">Check out our latest work across industries.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg shadow">
              <img src={p.imageUrl} alt={p.name} className="h-48 w-full object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-2">{p.description}</p>
              <button className="btn btn-outline btn-sm">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Happy Clients</h2>
        <p className="text-center text-gray-600 mb-10">What our clients say about us</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((c, i) => (
            <div key={i} className="card bg-white shadow p-4 text-center">
              <img src={c.imageUrl} alt={c.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
              <div className="mt-4">
                <h3 className="font-bold">{c.name}</h3>
                <p className="italic text-sm text-gray-600">{c.designation}</p>
                <p className="text-gray-500 mt-2">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
<section className="w-full">
  {/* Learn More Banner */}
  <div
    className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D')`, 
      // Replace with your actual image
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-white text-2xl md:text-3xl font-semibold max-w-xl mx-auto px-4">
        Learn more about our listing process, as well as our additional staging and design work.
      </h2>
      <button className="mt-6 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
        LEARN MORE
      </button>
    </div>
  </div>

  {/* Navigation & Newsletter */}
  <div className="bg-blue-600 py-6 px-4 text-white flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex flex-wrap gap-6 text-sm font-medium">
      <a href="#home" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
      <a href="#services" className="hover:underline"onClick={scrollToAbout}>Services</a>
      <a href="#projects" className="hover:underline" onClick={scrollToProjects}>Projects</a>
      {/* <a href="#testimonials" className="hover:underline">Testimonials</a> */}
      <a href="#contact" className="hover:underline" onClick={scrollToContact}>Contact</a>
    </div>

    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2">
      <input
        className="px-4 py-2 rounded-md text-black w-64 outline-none"
        placeholder="Enter Email Address"
        value={subscriberEmail}
        onChange={(e) => setSubscriberEmail(e.target.value)}
      />
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
        Subscribe
      </button>
    </form>
  </div>

  {/* Footer Bottom */}
  <div className="bg-gray-900 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <p>© All Rights Reserved 2025</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      {/* Replace with icons or images */}
      <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
      <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
      <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
      <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Flipr Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;