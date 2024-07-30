import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";

const Docs = () => {
  return (
    <div>
      <SwaggerUI url={"/docs.json"} />
    </div>
  );
};

export default Docs;
