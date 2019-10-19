import React, { Component } from 'react'
import './ProfileRight.css';
class ProfileRight extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`ProfileRight ${className}`}>
                <div class="card mb-0">
                    <div class="card-body">
                        <div class="border-0">
                            <div class="profile-log-switch">
                                <div class="media-heading">
                                    <h3 class="card-title mb-3 font-weight-bold">Personal Details</h3>
                                </div>
                                <ul class="usertab-list mb-0">
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Full Name :</span> Robert	McLean</a></li>
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Location :</span> USA</a></li>
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Languages :</span> English, German,Vehiclenish.</a></li>
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Website :</span>Autolist.com</a></li>
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Email :</span> robertmcleanr@Autolist.com</a></li>
                                    <li><a href="#" class="text-dark"><span class="font-weight-semibold">Phone :</span> +125 254 3562 </a></li>
                                </ul>
                                <div class="row profie-img">
                                    <div class="col-md-12">
                                        <div class="media-heading">
                                            <h3 class="card-title mb-3 font-weight-bold">Biography</h3>
                                        </div>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences that are extremely</p>
                                        <p class="mb-0">because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences the extre painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileRight;