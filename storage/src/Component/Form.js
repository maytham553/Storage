import React from "react"
import * as Yup from 'yup';
import { Formik, Field , ErrorMessage} from 'formik';

export default class Form{



    schema=()=>{
        const schema = Yup.object().shape({
            name:Yup.string().required("*هذا الحقل مطلوب"),
            note:Yup.string().required("*هذا الحقل مطلوب"),
            cost:Yup.number().required("*هذا الحقل مطلوب"),
            count:Yup.number().required("*هذا الحقل مطلوب"),
            price:Yup.number().required("*هذا الحقل مطلوب"),
            id:Yup.number().required("*هذا الحقل مطلوب"),

        });
        return schema
    }

    form = (props)=>{
        return <form className="form" onSubmit={props.handleSubmit}>
            <Field className="inputId input" placeholder="ID" name="id" type="number"/>
            <span className="error"><ErrorMessage  name="id"/></span>
            <Field className="inputName input" placeholder="الاسم" name="name" type="text"/>
            <span className="error"><ErrorMessage  name="name"/></span>
            <Field className="inputNote input" placeholder="ملاحضة" name="note" type="text"/>
            <span className="error"><ErrorMessage  name="note"/></span>
            <Field className="inputCost input" placeholder="تكلفة" name="cost" type="number"/>
            <span className="error"><ErrorMessage  name="cost"/></span>
            <Field className="inputPrice input" placeholder="سعر" name="price"  type="number"/>
            <span className="error"><ErrorMessage  name="price"/></span>
            <Field className="inputCount input" placeholder="عدد" name="count"  type="number"/>
            <span className="error"><ErrorMessage  name="count"/></span>

            <button className="btn btn-submit" type="submit" >save</button>
        </form>
    }
    
}