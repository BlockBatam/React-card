import React from 'react';

class Content extends React.Component {
  klik = () => {
    console.log( `Click`, this);
  }
  
    render() {
        return (
            <div className="Content">
            <h2> 25 outstanding scenic hikes </h2>
            <p className="caption">
            many would argue that this is the finest big peak in Vermont • there are several approach trails • the finest route is probably the Forest City > Long Trail > Burrows Trail loop • views are incredible from its bald and rocky summit • two nearby cabins/shelters along the Long Trail provide some basic but memorable backcountry lodging options • the wildest and least commercially developed of Vermont's five 4000-footers • typically snow-and-ice-free from late May/early June through early October (like most 4000-footers in New England)
            </p>
            <p className="time">
            2 Days Ago
            </p>
          </div>
        );
    }
}

export default Content;