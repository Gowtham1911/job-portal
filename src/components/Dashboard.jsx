import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">Lucky Job</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Search Job</li>
            <li>Applications</li>
            <li>Message</li>
            <li>Statistics</li>
            <li>News</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <input type="text" placeholder="Search something here..." />
          <div className="icons">
            <span>🔔</span>
            <span>⚙️</span>
            <span>👤</span>
          </div>
        </header>

        <section className="edit-profile">
          <h2>Edit Profile</h2>
          <div className="profile-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" defaultValue="Oda" />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" defaultValue="Drink" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" defaultValue="odavthreee" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value="**********" />
            </div>
            <div className="form-group">
              <label>Re-Type Password</label>
              <input type="password" value="**********" />
            </div>

            <div className="form-group">
              <label>MobilePhone</label>
              <input type="text" value="+50 123 456 78" />
            </div>
            <div className="form-group">
              <label>Whatsapp</label>
              <input type="text" value="+50 444 555 11" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value="odavthreee@mail.com" />
            </div>

            <button className="save-btn">Save Changes</button>
          </div>
        </section>
      </main>

      <aside className="profile-card">
        <img src="https://via.placeholder.com/80" alt="User" />
        <h3>Oda Drink</h3>
        <p>Programmer</p>
        <div className="stats">
          <div><strong>228</strong> Following</div>
          <div><strong>4,842</strong> Followers</div>
        </div>
        <div className="contact">
          <p>📞 +50 123 456 78</p>
          <p>✉️ odavthreee@mail.com</p>
        </div>
        <div className="skills">
          <p>66% PHP</p>
          <p>71% Vue</p>
          <p>90% Laravel</p>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
