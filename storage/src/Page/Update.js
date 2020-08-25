import React from "react"
import Repo from './../Repo'

export default class Update extends React.Component{
    state={itemsDetails:{name:"", note:"" , cost:"" , price:"" , count:"",id:""}}

    UpdateData = async (event) =>{
        event.preventDefault();

        try{
            const data ={name:this.state.itemsDetails.name , note:this.state.itemsDetails.note, 
                cost:this.state.itemsDetails.cost , price:this.state.itemsDetails.price ,
                 count:this.state.itemsDetails.count  };
            let repo = new Repo();
            console.log(this.state.itemsDetails);
            console.log(data);
            await repo.UpdateItem(data , this.state.itemsDetails.id)
            alert("تم تحديث العنصر بنجاح"); 
            this.setState({ itemsDetails:{id:"", name:"", note:"" , cost:"" , price:"" , count:""} });

        }catch{
            alert("حدث حطأ ما")

        }
      
    }

    getAnItem = async () => {
        let repo = new Repo();
        try {
            const item = await repo.getAnItem(this.state.itemsDetails.id);
            this.setState({ itemsDetails:item.data });
            

        }catch{
            this.setState({ itemsDetails:{name:"", note:"" , cost:"" , price:"" , count:""} });

        }
    }

   

    setIdValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              id:event.target.value
            }
          } , this.getAnItem )
        
    }
    setNameValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              name:event.target.value
            }
          }  )
       
        
    }
    setNoteValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              note:event.target.value
            }
          }  )
       
        
    }
    setCostValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              cost:event.target.value
            }
          }  )
        
    }
    setPriceValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              price:event.target.value
            }
          }  )
        
    }
    setCountValue = (event) => {
        this.setState({

            itemsDetails: {
              ...this.state.itemsDetails,
              count:event.target.value
            }
          }  )        
    }

   
 



    


    componentDidMount(){

    }
    render(){
        return(
        <form className="form" onSubmit={this.UpdateData}>
            <input className="inputId input" placeholder="ID" name="id" type="number" value={this.state.itemsDetails.id} onChange={this.setIdValue}  />
            <input className="inputName input" placeholder="الاسم" name="name" type="text" value={this.state.itemsDetails.name} onChange={this.setNameValue}/>
            <input className="inputNote input" placeholder="ملاحضة" name="note" type="text" value={this.state.itemsDetails.note} onChange={this.setNoteValue}/>
            <input className="inputCost input" placeholder="تكلفة" name="cost" type="number"value={this.state.itemsDetails.cost} onChange={this.setCostValue}/>
            <input className="inputPrice input" placeholder="سعر" name="price"  type="number"value={this.state.itemsDetails.price} onChange={this.setPriceValue}/>
            <input className="inputCount input" placeholder="عدد" name="count"  type="number"value={this.state.itemsDetails.count} onChange={this.setCountValue}/>
           

            <button className="btn btn-submit" type="submit" >save</button>
        </form>
        )
    }
}