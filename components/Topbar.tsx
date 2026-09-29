import {
  Search,
  Bell,
  ChevronDown,
  CircleDollarSign
} from "lucide-react";


export default function Topbar() {

  return (

    <header className="topbar">


      <div className="welcome">

        <h1>
          Good Trading! 👋
        </h1>

        <p>
          Your professional trading performance overview
        </p>

      </div>




      <div className="top-actions">


        <div className="search-box">

          <Search size={18}/>

          <span>
            Search trades...
          </span>

        </div>




        <div className="market-badge">

          <CircleDollarSign size={18}/>

          Market Open

        </div>




        <div className="notification">

          <Bell size={20}/>

        </div>





        <div className="profile">


          <div className="avatar">
            TR
          </div>


          <div>

            <h4>
              Trader
            </h4>

            <p>
              Pro Account
            </p>

          </div>



          <ChevronDown size={18}/>


        </div>


      </div>


    </header>

  );

}
