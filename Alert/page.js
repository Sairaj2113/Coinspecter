import Link from "next/link"
import Sidebar from "../Sidebar";

function Home(){
return(
  <>
  <Sidebar/>
  <div classNAme="main">
    <div class="content">
        <div class="header"><h1>Alert</h1></div>
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
        <th> Alert Name </th>
        <th> Transaction Alert </th> 
        <th> INR($=83) </th> 
        <th> Time Stamp </th>  
        <th> Category </th>
        <th> Wallet </th> 
        <th> Transaction ID </th>
        <th> Edit </th>
      </tr>
      <tr>
        <td>  </td>
        <td> 0.2548 </td>
        <td> 1775512.25 </td>
        <td> 01-10-2023 00:41:08 </td>
        <td>  </td>
        <td> IFWQi_PMcGd </td>
        <td> 0615d...80809 </td>
        <td>   </td>
      </tr>
      </thead>
    </table>
  </div>

  </>
);
}
export default Home;