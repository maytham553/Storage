import React from 'react';

export default class RowTable extends React.Component{


    render(){

        return(
       <tr className={this.props.className}>
           <th>{this.props.id}</th>
           <th>{this.props.name}</th>
           <th>{this.props.note}</th>
           <th>{this.props.cost}</th>
           <th>{this.props.price}</th>
           <th>{this.props.count}</th>
           <th>{this.props.profit}</th>
       </tr>
   
        )
    }

}