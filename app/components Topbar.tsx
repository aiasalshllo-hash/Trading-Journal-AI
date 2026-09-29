import {
  Search,
  Bell,
  ChevronDown
} from "lucide-react";


export default function Topbar(){

return (

<header
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"30px"
}}
>


<div>

<h1
style={{
fontSize:"32px",
fontWeight:700
}}
>
Good Trading! 👋
</h1>


<p
style={{
color:"#94a3b8",
marginTop:"8px"
}}
>
Discipline turns knowledge into results.
</p>


</div>



<div
style={{
display:"flex",
alignItems:"center",
gap:"20px"
}}
>



<div
style={{
display:"flex",
alignItems:"center",
gap:"10px",
background:"#0f172a",
border:"1px solid rgba(255,255,255,0.08)",
padding:"12px 18px",
borderRadius:"14px"
}}
>


<Search size={18}/>


<span
style={{
color:"#94a3b8"
}}
>
Search trades, setups...
</span>


</div>




<div
style={{
background:"#0f172a",
padding:"12px",
borderRadius:"50%"
}}
>

<Bell size={20}/>

</div>



<div
style={{
display:"flex",
alignItems:"center",
gap:"10px",
background:"#0f172a",
padding:"10px 15px",
borderRadius:"14px"
}}
>


<div
style={{
width:"35px",
height:"35px",
borderRadius:"50%",
background:"#22c55e",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontWeight:700
}}
>
A
</div>


<ChevronDown size={18}/>


</div>



</div>


</header>

)

}
