const heading = React.createElement(
  "h1",
  { id: "root" },
  "hello shahaji and dipali"
); // createElement( ) api takes three argument one is tag and second is empty object and third is put inside the tag

/* how we create nested element into react like html nested element 

<div>
     <div>
          <h1>this is h1 tah </h1>
      </div>
</div> 

create nested element like this 


*/

const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1"),
      null,
      "this is h1 tag",
      React.createElement("h2"),
      null,
      "this is h2 tag",
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1"),
      null,
      "this is h1 tag",
      React.createElement("h2"),
      null,
      "this is h2 tag",
    ]),
  ]
);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
