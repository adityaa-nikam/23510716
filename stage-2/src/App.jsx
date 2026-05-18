import { useState } from "react";

function App() {

  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "Placement",
      priority: "High",
      message: "Google hiring for SDE role",
      timestamp: "2026-05-18 10:30"
    },
    {
      id: 2,
      type: "Result",
      priority: "Medium",
      message: "Mid sem results declared",
      timestamp: "2026-05-18 09:00"
    },
    {
      id: 3,
      type: "Event",
      priority: "Low",
      message: "Tech fest starts tomorrow",
      timestamp: "2026-05-17 18:00"
    },
    {
      id: 4,
      type: "Placement",
      priority: "High",
      message: "Microsoft internship applications open",
      timestamp: "2026-05-27 14:00"
    },
    {
      id: 5,
      type: "Result",
      priority: "Medium",
      message: "Revaluation results out",
      timestamp: "2026-05-18 11:00"
    }
  ];

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (n) => n.type.toLowerCase() === filter
        );

  const highPriorityCount = notifications.filter(
    (n) => n.priority === "High"
  ).length;

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "10px"
          }}
        >
          REAL-TIME UNIVERSITY DASHBOARD
        </p>

        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginTop: "0",
            marginBottom: "40px",
            fontWeight: "700",
            letterSpacing: "-2px"
          }}
        >
          Campus Notifications
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "50px"
          }}
        >

          <div
            style={{
              width: "160px",
              background: "#1e293b",
              padding: "20px",
              border: "1px solid #334155",
              textAlign: "center"
            }}
          >
            <p style={{ color: "#94a3b8" }}>
              Total Notifications
            </p>

            <h2 style={{ fontSize: "42px" }}>
              {notifications.length}
            </h2>
          </div>

          <div
            style={{
              width: "160px",
              background: "#1e293b",
              padding: "20px",
              border: "1px solid #334155",
              textAlign: "center"
            }}
          >
            <p style={{ color: "#94a3b8" }}>
              High Priority
            </p>

            <h2
              style={{
                fontSize: "42px",
                color: "#f97316"
              }}
            >
              {highPriorityCount}
            </h2>
          </div>

          <div
            style={{
              width: "220px",
              background: "#1e293b",
              padding: "20px",
              border: "1px solid #334155"
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "15px"
              }}
            >
              Filter Notifications
            </p>

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                background: "#0f172a",
                color: "white",
                border: "1px solid #475569",
                fontSize: "16px",
                outline: "none"
              }}
            >
              <option value="all">
                All
              </option>

              <option value="placement">
                Placement
              </option>

              <option value="result">
                Result
              </option>

              <option value="event">
                Event
              </option>
            </select>
          </div>

        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "10px"
            }}
          >
            Priority Inbox
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px"
            }}
          >
            Smart campus notification management system
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px"
          }}
        >

          {filteredNotifications.map(
            (notification) => (

              <div
                key={notification.id}

                onClick={() =>
                  localStorage.setItem(
                    notification.id,
                    "viewed"
                  )
                }

                style={{
                  background: "#1e293b",
                  padding: "18px",
                  border: "1px solid #334155",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "25px"
                  }}
                >

                  <span
                    style={{
                      color: "#cbd5e1",
                      fontWeight: "600",
                      fontSize: "14px",
                      letterSpacing: "1px"
                    }}
                  >
                    {notification.type}
                  </span>

                  <span
                    style={{
                      color:
                        notification.priority ===
                        "High"
                          ? "#f97316"
                          : notification.priority ===
                            "Medium"
                          ? "#38bdf8"
                          : "#94a3b8",
                      fontWeight: "600"
                    }}
                  >
                    {notification.priority}
                  </span>

                </div>

                <h2
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.5",
                    marginBottom: "35px"
                  }}
                >
                  {notification.message}
                </h2>

                <div
                  style={{
                    borderTop:
                      "1px solid #334155",
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center"
                  }}
                >

                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "15px"
                    }}
                  >
                    {notification.timestamp}
                  </span>

                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background:
                        notification.priority ===
                        "High"
                          ? "#f97316"
                          : notification.priority ===
                            "Medium"
                          ? "#38bdf8"
                          : "#94a3b8"
                    }}
                  />

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );
}

export default App;