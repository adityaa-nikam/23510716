import { useState } from "react";

function App() {

  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "Placement",
      message: "Tesla hiring for SDE role",
      timestamp: "2026-05-18 10:30"
    },
    {
      id: 2,
      type: "Result",
      message: "Mid sem results declared",
      timestamp: "2026-05-18 09:00"
    },
    {
      id: 3,
      type: "Event",
      message: "Tech fest starts tomorrow",
      timestamp: "2026-05-17 18:00"
    }
  ];

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (n) => n.type.toLowerCase() === filter
        );

  return (

    <div style={{
      padding: "40px",
      fontFamily: "Arial",
      backgroundColor: "#0f172a",
      minHeight: "100vh",
      color: "white"
    }}>

      <h1>Campus Notifications</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "30px",
          borderRadius: "5px"
        }}
      >
        <option value="all">All</option>
        <option value="placement">Placement</option>
        <option value="result">Result</option>
        <option value="event">Event</option>
      </select>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px"
      }}>

        {filteredNotifications.map((notification) => (

          <div
            key={notification.id}
            style={{
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "10px"
            }}
          >

            <h2>{notification.message}</h2>

            <p>
              <strong>Type:</strong> {notification.type}
            </p>

            <p>
              <strong>Time:</strong> {notification.timestamp}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;