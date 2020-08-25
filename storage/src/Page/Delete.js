import React from "react"
import Repo from './../Repo'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Delete extends React.Component {
    state={itemsDetails:{name:"", note:"" , cost:"" , price:"" , count:"",id:""}}

    DeleteData = async (event) => {
        event.preventDefault();
        try {
            let repo = new Repo();
            await repo.DeleteItem(this.state.itemsDetails.id)
            alert("لقد تم مسح العنصر" +this.state.itemsDetails.id + "بنجاح")
            this.setState({itemsDetails:{name:"", note:"" , cost:"" , price:"" , count:"",id:""}})
        } catch {
            alert("يبدو ان العنصر" + this.state.itemsDetails.id +  "غير موجود او تأكد من اتصالك")
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

   

    

    


   
    render() {


        return (
            <form className="form" onSubmit={this.DeleteData}>
            <input className="inputId input" placeholder="ID" name="id" type="number" value={this.state.itemsDetails.id} onChange={this.setIdValue}  />
            <input className="inputName input" placeholder="الاسم" name="name" type="text" value={this.state.itemsDetails.name} onChange={this.setNameValue}/>
            <input className="inputNote input" placeholder="ملاحضة" name="note" type="text" value={this.state.itemsDetails.note} onChange={this.setNoteValue}/>
            <input className="inputCost input" placeholder="تكلفة" name="cost" type="number"value={this.state.itemsDetails.cost} onChange={this.setCostValue}/>
            <input className="inputPrice input" placeholder="سعر" name="price"  type="number"value={this.state.itemsDetails.price} onChange={this.setPriceValue}/>
            <input className="inputCount input" placeholder="عدد" name="count"  type="number"value={this.state.itemsDetails.count} onChange={this.setCountValue}/>
           

            <button className="btn btn-submit" type="submit" >Delet</button>
        </form>
        )}
}



  

