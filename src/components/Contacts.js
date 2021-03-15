import React from "react";
import ContactForm from "./ContactForm"


const  Contacts= () => {
    return ( 
        <>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                            <h1 class="display-4 text-center">Admin-Dashboard</h1>
                            <p class="lead">Upload files to e-Display.</p>
                    </div>
                
                <div className="row">
                    <div className="col-md-5">
                        <ContactForm />
                    </div>
                


                    <div className="col-md-7">
                        <div> 
                            Live Services... 
                        </div>
                    </div>  
                    </div>
                </div>
        </>
     );
}
 
export default Contacts;