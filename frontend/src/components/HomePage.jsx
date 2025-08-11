import React, { useState } from "react";
import Analysis from "./Analysis";
import BForm from "./BForm";
import Master from "./Master";
import Downloads from "./Downloads";
import Home from "./HomePage"; // your main page component (can rename this to avoid conflict)

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "b-form", label: "B-form", icon: "📄" },
  { id: "master", label: "Master", icon: "📚" },
  { id: "analysis", label: "Analysis", icon: "📊" },
  { id: "download", label: "Download", icon: "⬇️" },
];

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selected, setSelected] = useState("dashboard");

  const renderContent = () => {
    switch (selected) {
      case "dashboard":
        return <Home />; // your main dashboard/HomePage content
      case "b-form":
        return <BForm />;
      case "master":
        return <Master />;
      case "analysis":
        return <Analysis />;
      case "download":
        return <Downloads />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="dashboard-container">
        <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            title={sidebarOpen ? "Collapse" : "Expand"}
          >
            {sidebarOpen ? "←" : "→"}
          </button>

          <div className="account-info">
            <div className="avatar">A</div>
            <div className="account-details">
              <div className="name">Dummy Account</div>
              <div className="email">dummy@example.com</div>
            </div>
          </div>

          <nav className="menu">
            {menuItems.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`menu-item ${selected === id ? "selected" : ""}`}
                onClick={() => setSelected(id)}
                title={label}
              >
                <span className="icon">
                  {sidebarOpen ? icon : label.charAt(0)}
                </span>
                {sidebarOpen && <span className="label">{label}</span>}
              </button>
            ))}
          </nav>
        </aside>

        <main className="main-content">{renderContent()}</main>
      </div>
    </>
  );
};

export default HomePage;
