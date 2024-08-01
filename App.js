const heading = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {id:"heading1"}, "heading 1"), React.createElement("h1", {id:"heading2"}, "heading 2")]), React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {id:"heading1"}, "heading 1"), React.createElement("h1", {id:"heading2"}, "heading 2")])]    
);
console.log(heading); //Object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);