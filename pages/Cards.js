import React from "react";
import { Link } from "react-router-dom";
class Cards extends React.Component{
    render(){
return(
    <>
  <div class="container mt-5">
    <div class="row">

<div class="col-md-4">
 

    <div class="profile-card-6 p-6">
    <Link to="/Email">
        <img className="img img-responsive" src="assets/assets/img/IMGE.png" />
        
        <div className="profile-name" >EMAIL</div>

        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row text-left p-2">
                    <div class="col-xs-4">
                        <h4>Click here to check if the sender of email is spam before replying to it</h4>

                    </div>


                </div>
            </div>
        </div>
        </Link>
    </div>
</div>
<div class="col-md-4">


    <div class="profile-card-6">
    <Link to="/">
        <img src="assets/assets/img/Num.png" class="img img-responsive"/>
        <div class="profile-name">PHONE NUMBER</div>

        <div class="profile-overview">
            <div class="profile-overview">
                <div class="row text-left p-2">

                    <div class="col-xs-4">
                        <h4>Click here to check if phone number is previously reported before answearing them</h4>
                    </div>

                </div>
            </div>
        </div>
        </Link>
    </div>
</div>

<div class="col-md-4">


    <div class="profile-card-6">
    <Link to="/">
        <img src="assets/assets/img/URL.png" class="img img-responsive"/>
        <div class="profile-name">URL</div>

        <div class="profile-overview">
            <div class="profile-overview">
                <div class="row text-left p-2">

                    <div class="col-xs-4">
                        <h3>Click here to check if the URL is spam before you click on it</h3>

                    </div>
                </div>
            </div>
        </div>
        </Link>
    </div>
</div>

    </div>
</div>
</>
);

}
}

export default Cards;