import React from 'react';
import RowItem from './RowItem'


export default class RowTable extends React.Component {

    table = () => {
        return <table className="table">
            <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>note</th>
                    <th>cost</th>
                    <th>price</th>
                    <th>count</th>
                    <th>profit</th>

                </tr>

                {this.fillData()}
            </tbody>
        </table>


    }

    fillData = () => {

        switch (this.props.statusRepo) {
            case "loading":
                return (<tr><th>Loading</th><th>Loading</th><th>Loading</th><th>Loading</th><th>Loading</th><th>Loading</th><th>Loading</th></tr>)
                break;

            case "error":
                return (<tr><th>error</th><th>error</th><th>error</th><th>error</th><th>error</th><th>error</th><th>error</th></tr>)
                break;

            case "ok":
                return (
                    this.props.itemsDetails.map(item => {
                        if (item.count < 5) {
                            return <RowItem key={item.id} className="red" id={item.id} name={item.name} note={item.note} cost={item.cost}
                                price={item.price} count={item.count} profit={item.price - item.cost} />
                        } else {
                            return <RowItem key={item.id} id={item.id} name={item.name} note={item.note} cost={item.cost}
                                price={item.price} count={item.count} profit={item.price - item.cost} />
                        }


                    }
                    )
                )
                break;

            default:
                break;
        }
    }


    
    render() {

        return (this.table())
    }

}