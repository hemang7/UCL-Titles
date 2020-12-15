import React, { useState } from "react";
import "./styles.css";

const leagues = {
  Laliga: [
    { name: "Real Madrid", CLTrophies: "13", pic: "https://1000logos.net/wp-content/uploads/2017/06/Real-Madrid-Logo-768x768.png" },
    { name: "Barcelona", CLTrophies: "5", pic: "https://logos-download.com/wp-content/uploads/2016/05/FC_Barcelona_logo_logotipo_crest-690x700.png" },
    { name: "Atletico Madrid", CLTrophies: "0", pic: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png" }
  ],
  EPL: [
    { name: "Liverpool", CLTrophies: "6", pic:"https://1000logos.net/wp-content/uploads/2017/04/Liverpool-Logo-768x614.png" },
    { name: "Chelsea", CLTrophies: "1", pic:"https://1000logos.net/wp-content/uploads/2016/11/Chelsea-Logo-640x400.png" },
    { name: "Man Utd", CLTrophies: "3", pic:"https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Logo-640x649.png" }
  ],
  Bundesliga: [
    { name: "Bayern Munich", CLTrophies: "6", pic:"https://1000logos.net/wp-content/uploads/2018/05/Bayern-M%C3%BCnchen-Logo-640x400.png" },
    { name: "Borussia Dortmund", CLTrophies: "1", pic:"https://1000logos.net/wp-content/uploads/2017/08/BVB-Logo-768x650.png" },
    { name: "RB Leipzig", CLTrophies: "0", pic:"https://logodownload.org/wp-content/uploads/2019/11/rb-leipzig-logo-0.png" }
  ],
  SerieA: [
    { name: "Juventus", CLTrophies: "2", pic:"https://o.remove.bg/downloads/7e02c6d4-8b21-4fb9-b825-ad844569e0cc/Juve-sq-removebg-preview.png" },
    { name: "AC Milan", CLTrophies: "7", pic:"https://1000logos.net/wp-content/uploads/2016/10/Logo-Ac-Milan-640x400.png" },
    { name: "Inter Milan", CLTrophies: "1", pic:"https://1000logos.net/wp-content/uploads/2018/06/Internazionale-Logo-768x432.png" }
  ]
};
export default function App() {
  const [clubSelected, setClubSelected] = useState("Laliga");

  function clubClickHandler(club) {
    setClubSelected(club);
  }
  return (
    <div className="App">
      <h1>⚽ World of Football ⚽</h1>
      <h4>These are some of the world's best football clubs.</h4>
      <div>
        {Object.keys(leagues).map((club) => (
          <button onClick={() => clubClickHandler(club)} className="club">
            {club}
          </button>
        ))}
      </div>
      <hr />
      <div className="league-container">
        <ul>
          {leagues[clubSelected].map((league) => (
            
            <li key={league.name} className="league-list">
              <h2> {league.name} </h2>
              <p style={{ fontSize: "larger" }}> {league.CLTrophies} </p>
              <div className="pic">
             <img src={league.pic} className="pic" alt="picture"></img>
           </div>
             </li>
           
          ))}
        </ul>
      </div>
    </div>
  );
}
