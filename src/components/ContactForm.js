
import React,{useState,useEffect} from "react";
const ContactForm = () => {
const initialFieldValues={
    Category:'',
    Title:'',
    Description:'',
    Deadline:''

}
var[values,setValues]=useState(initialFieldValues)
    return ( 
            <div>
                <form autoComplete="off">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-th-large" > </i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Category" name="Category" 
                        value={values.Category}
                         />
                    </div>
                    <br></br>
                    
                    
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-text-height" > </i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Title" name="Title" 
                        value={values.Title}
                        />
                    </div>

                    <br></br>
                    
                     <div class="input-group">
                     <i class="fa fa-file-text" aria-hidden="true"></i>
                    <textarea class="form-control" placeholder="Description..." name="Description" >  </textarea>
                    </div>
                    
                </form>
           </div>
                    
     );
}
 
export default ContactForm;