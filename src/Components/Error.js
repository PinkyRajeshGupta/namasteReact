import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>{err.data}</h2>
      <h2>status : {err.status}</h2>
    </div>
  );
};
export default Error;
