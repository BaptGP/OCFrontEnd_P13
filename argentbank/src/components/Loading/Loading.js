import "../../style/Home/home.css";
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <main style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
      <h1 style={{fontWeight:"bold", fontSize:30}}>Chargement</h1>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#00BC77"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </main>
  );
}

export default Loading;
