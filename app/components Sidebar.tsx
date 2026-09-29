import {
  Home,
  BarChart3,
  Brain,
  ShieldCheck,
  BookOpen,
  CalendarDays,
  Settings,
  LineChart,
  Target
} from "lucide-react";


const menuItems = [
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


export default function Sidebar(){

return (

<aside className="sidebar">


<div className="logo">

TradingOS

</div>


<nav className="menu">


{menuItems.map((item)=>{


const Icon = item.icon;


return (

<div
key={item.name}
className={
item.active
?
"menu-item active"
:
"menu-item"
}
>


<Icon size={18}/>


<span>
{item.name}
</span>


</div>


)


})}


</nav>


</aside>

)

}
