import Axios from "axios";


export default class Repo {
    
    url = 'http://127.0.0.1:8000/api/storage';

     getItems = async() => {

        try {
            const items = await Axios.get(this.url);
            return items
        } catch {
            alert(" يبدو انك غير متصل بالسيرفر ..تأكد من اتصالك وعاود المحاولة ");
        }
    }

    getAnItem = async(id) => {

        try {
            
            const item = await Axios.get(this.url+"/"+id);
            return item
        } catch {
            console.log(" يبدو انك غير متصل بالسيرفر ..تأكد من اتصالك وعاود المحاولة ");
        }
    }
    postItem = async(data) => {
        const response = await Axios.post(this.url , data);
    }

    UpdateItem = async(data , id) => {
        await Axios.put(this.url+"/"+id  , data);
    }

    DeleteItem = async(id) => {
       
      await Axios.delete(this.url+"/"+id);
      
    }


    


    




}
