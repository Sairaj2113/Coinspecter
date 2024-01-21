import Link from "next/link";

function Sidebar(){ 
    return(
    <>
    <div className="wrapper">
    <div className="sidebar">
    <h2 className="logo"><img src="CoinSpector_Logo.png"/></h2>
      <ul>
        <li><a href="#"><img src="home.png"/>Home</a></li>
        <li><a href="#"><img src="Image Crypto Node.png"/>Crypto Node</a></li>
        <li><a href="#"><img src="Transaction Analysis.png"/>TransactionAnalysis</a></li>
        <li><a href="#"><img src="wallet Analysis.png"/>Wallet Analysis</a></li>
        <li><a href="#"><img src="Visualization.png"/>Visualization</a></li>
        <li><a href="#"><img src="Watchlist.png"/>Watch List</a></li>
        <li><a href="#"><img src="Reporting.png"/>Reporting</a></li>
        <li><a href="#"><img src="Settings.png"/>Setting</a></li>
        <li><a href="#"><img src="Settings.png"/>Support</a></li>
        <li><a href="#"><img src="Settings.png"/>Chart Test</a></li>
      </ul>
    </div>
    </div>
    </>
    );
}
export default Sidebar;