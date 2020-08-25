import React from "react"
import Repo from './../Repo'
import { Formik, Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default class Add extends React.Component{
state={}

    postData = async (values , {resetForm}) =>{
        try{
        const data ={name:values.name , note:values.note , cost:values.cost , price:values.price , count:values.count  };
        let repo = new Repo();
        await repo.postItem(data);
        resetForm();
        }catch(e){
            alert("لم يتم اضافة العنصر ... تأكد من اتصالك");
        }
       
    }

    schema=()=>{
        const schema = Yup.object().shape({
            name:Yup.string().required("*هذا الحقل مطلوب"),
            note:Yup.string().required("*هذا الحقل مطلوب"),
            cost:Yup.number().required("*هذا الحقل مطلوب"),
            count:Yup.number().required("*هذا الحقل مطلوب"),
            price:Yup.number().required("*هذا الحقل مطلوب"),

        });
        return schema
    }

    form = (props)=>{
        return <form className="form" onSubmit={props.handleSubmit}>
            <Field className="inputName input" placeholder="الاسم" name="name" type="text"/>
            <span className="error"><ErrorMessage  name="name"/></span>
            <Field className="inputNote input" placeholder="ملاحضة" name="note" type="text"/>
            <span className="error"><ErrorMessage className="error" name="note"/></span>
            <Field className="inputCost input" placeholder="تكلفة" name="cost" type="number"/>
            <span className="error"><ErrorMessage className="error" name="cost"/></span>
            <Field className="inputPrice input" placeholder="سعر" name="price"  type="number"/>
            <span className="error"><ErrorMessage className="error" name="price"/></span>
            <Field className="inputCount input" placeholder="عدد" name="count"  type="number"/>
            <span className="error"><ErrorMessage className="error" name="count"/></span>

            <button className="btn btn-submit" type="submit" >save</button>
        </form>
    }


    componentDidMount(){

    }
    render(){
        return(
            <Formik
            initialValues={ {name:"" , note:"" , cost:"" , price:"" , count:""} }
            onSubmit={this.postData}
            validationSchema={this.schema()}
            >
            {this.form} 
            </Formik>
        )
    }
}