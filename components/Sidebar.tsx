import {
  Home,
  LineChart,
  BarChart3,
  Brain,
  Target,
  ShieldCheck,
  BookOpen,
  CalendarDays,
  Settings,
  Upload
} from "lucide-react";


const menu = [
  {
    name: "Dashboard",
    icon: Home,
    active: true
  },
  {
    name: "Trades",
    icon: LineChart
  },
  {
    name: "Analytics",
    icon: BarChart3
  },
  {
    name: "AI Coach",
    icon: Brain
  },
  {
    name: "Psychology",
    icon: Target
  },
  {
    name: "Risk Management",
    icon: ShieldCheck
  },
  {
    name: "Prop Firm Tracker",
    icon: Upload
  },
  {
    name: "Trading Academy",
    icon: BookOpen
  },
  {
    name: "Calendar",
    icon: CalendarDays
  },
  {
    name: "Settings",
    icon: Settings
  }
];


export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo">
        TradingOS
      </div>


      <nav className="menu">

        {menu.map((item) => {

          const Icon = item.icon;


          return (

            <div
              key={item.name}
              className={
                item.active
                  ? "menu-item active"
                  : "menu-item"
              }
            >

              <Icon size={19}/>

              <span>
                {item.name}
              </span>

            </div>

          );

        })}

      </nav>


      <div
        style={{
          marginTop:"auto",
          paddingTop:"40px"
        }}
      >

        <div className="card">

          <h3>
            Upgrade to Pro
          </h3>

          <p style={{
            color:"#94a3b8",
            fontSize:"14px"
          }}>
            Unlock AI analysis, unlimited backtests and more.
          </p>


          <button
            style={{
              marginTop:"15px",
              width:"100%",
              padding:"12px",
              borderRadius:"12px",
              border:"none",
              background:"#22c55e",
              color:"black",
              fontWeight:700,
              cursor:"pointer"
            }}
          >
            Upgrade Now
          </button>


        </div>


      </div>


    </aside>

  );

}
