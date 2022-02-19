import logo from "../assets/logo2.png";
import { AppHeader } from "../components/styles/styles";
import SearchIcon from "@mui/icons-material/Search";

export default class Header extends React.Component {
 state ={
   query: ""
 }
 updateQuery=(ev)=>{
   this.setState({query:ev.target.value})
 }

render(){
  return (
    <div>
      <AppHeader>
        <div className="header-logo">
          <img className="logo"src={logo} id="rocket" alt="rocket" style={{width: "130px"}}  />
        </div>
        <div className="header-links">
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisa..."
            value={this.state.query}
            onChange={this.updateQuery}
          />
          <SearchIcon />
        </div>

      </AppHeader>
    </div>
  );
};
}