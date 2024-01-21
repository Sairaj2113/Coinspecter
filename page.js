import Link from "next/link"
import Sidebar from "./Sidebar";

function Home(){
return(
  <>
  <Sidebar/>
  <div classNAme="main">
    <div class="content">
        <div class="header"><h1>Watchlist</h1></div>
    </div>
    <div className='nav'>
        <li><a href="/"> Watchlist </a></li>
        <li><a href="/Alert"> Alert </a></li>
        <li><a href="/Blacklist"> Blacklist </a></li>
    </div>
    <div className="header-controls">
        <select>
          <option value="option1">All</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select>
          <option value="option1"></option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input type='text' placeholder='search'/>
        <button className="add"> Add </button>
        <button className="delete"> Delete </button>
      </div>
      </div>

  <div>
    <table  className='table'>
      <thead className='thead'>
      <tr>
        <th> Sr.No </th>
        <th> Wallet Address </th> 
        <th> Coin </th> 
        <th> Balance </th>  
        <th> Transaction Video </th>
        <th> Category </th> 
        <th> Black Listed </th>
        <th> Edit </th>
      </tr>
      <tr>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
        <td> Sairaj </td>
      </tr>
      </thead>
    </table>
  </div>

  </>
);
}
export default Home;