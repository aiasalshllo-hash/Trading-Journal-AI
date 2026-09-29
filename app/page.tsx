import {
  TrendingUp,
  BarChart3,
  Brain,
  ShieldCheck,
  BookOpen,
  CalendarDays,
  Settings,
  Search
} from "lucide-react";


const stats = [
  {
    title: "Account Balance",
    value: "$10,420.50",
    change: "+2.4% today"
  },
  {
    title: "Total P&L",
    value: "+12.7R",
    change: "+5.8R this week"
  },
  {
    title: "Winrate",
    value: "62%",
    change: "38W / 23L"
  },
  {
    title: "Profit Factor",
    value: "2.1",
    change: "Excellent"
  }
];


const trades = [
  {
    market:"EUR/USD",
    setup:"Liquidity Sweep",
    result:"+2.3R",
    status:"Win"
  },
  {
    market:"NAS100",
    setup:"Fair Value Gap",
    result:"-1.0R",
    status:"Loss"
  },
  {
    market:"XAU/USD",
    setup:"Order Block",
    result:"+1.8R",
    status:"Win"
  }
];


export default function Home(){

return (

<div className="dashboard">


<aside className="sidebar">

<div className="logo">
TradingOS
</div>


<div className="menu">


<div className="menu-item active">
🏠 Dashboard
</div>


<div className="menu-item">
📈 Trades
</div>


<div className="menu-item">
<BarChart3 size={18}/>
Analytics
</div>


<div className="menu-item">
<Brain size={18}/>
AI Coach
</div>


<div className="menu-item">
🧠 Psychology
</div>


<div className="menu-item">
<ShieldCheck size={18}/>
Risk Management
</div>


<div className="menu-item">
<BookOpen size={18}/>
Trading Academy
</div>


<div className="menu-item">
<CalendarDays size={18}/>
Calendar
</div>


<div className="menu-item">
<Settings size={18}/>
Settings
</div>


</div>

</aside>



<main className="main">


<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"30px"
}}>


<h1>
Good Trading! 👋
</h1>


<div>
<Search/>
</div>


</div>




<div className="stats-grid">


{stats.map((item)=>(

<div className="card" key={item.title}>

<div className="card-title">
{item.title}
</div>


<div className="card-value green">
{item.value}
</div>


<p>
{item.change}
</p>


</div>

))}


</div>





<div className="grid-two">


<div className="panel">


<h2>
Equity Curve
</h2>


<div className="chart">

</div>


</div>



<div className="panel">


<h2>
Performance Score
</h2>


<h1 className="green">
78/100
</h1>


<p>
Trading: 78
</p>

<p>
Psychology: 65
</p>

<p>
Risk: 92
</p>


</div>


</div>





<div className="panel" style={{
marginTop:"25px"
}}>


<h2>
Latest Trades
</h2>


<table>

<thead>

<tr>

<th>
Market
</th>

<th>
Setup
</th>

<th>
Result
</th>

<th>
Status
</th>


</tr>

</thead>


<tbody>


{trades.map((trade)=>(


<tr key={trade.market}>


<td>
{trade.market}
</td>


<td>
{trade.setup}
</td>


<td className={
trade.status==="Win"
?"win"
:"loss"
}>

{trade.result}

</td>


<td>

{trade.status}

</td>


</tr>


))}


</tbody>


</table>


</div>



</main>


</div>

)

}
