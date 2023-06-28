import "./app.scss";
import { PublicRoutes } from "./routes/PublicRoutes";
function App() {
  const auth = null;
  return <div className="app">{!auth ? <PublicRoutes /> : <h1>Hola</h1>}</div>;
}

export default App;
