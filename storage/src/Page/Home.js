import React from 'react';
import Table from '../Component/Table'
import Repo from './../Repo'


export default class Home extends React.Component{

    state = { itemsDetails: [], statusRepo: "loading" };
    getData = async () => {
        const repo = new Repo();
        try {
            const items = await repo.getItems();
            this.setState({ itemsDetails: items.data, statusRepo: "ok" });
        }catch{
            this.setState({ statusRepo: "error" });

        }
    }

    componentDidMount() {
        this.getData();
    }

    render(){

        return(
            <div className="home">
                <Table  itemsDetails={this.state.itemsDetails} statusRepo={this.state.statusRepo} />
            </div>
        )
    }

}