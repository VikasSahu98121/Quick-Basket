
import { DotLoader } from "react-spinners";
 export const Spinner = (props) => {
  return (
    <div className="sweet-loading">
      <center><DotLoader
        color="green"
        loading={props.state}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </center>
    </div>
  );
}