import React, { Component } from 'react';
import './ProfileRight.css';
function ProfileRight(props) {
    const { className, profile } = props;
    return (
      <div className={`ProfileRight ${className}`}>
        <div class="card mb-0">
          <div className="card-header">
            <h3 className="card-title font-weight-bold">Профиль пользователя</h3>
          </div>
          <div class="card-body">
            <div class="border-0">
              <div class="profile-log-switch">
                <div class="media-heading">
                  <h3 class="card-title mb-3 font-weight-bold">
                    Персональные данные
                  </h3>
                </div>
                <ul class="usertab-list mb-0">
                  <li>
                    <span class="font-weight-semibold">Полное имя :</span>{' '}
                    {profile.name} {profile.surname}
                  </li>
                  <li>
                    <span class="font-weight-semibold">Адрес :</span>{' '}
                    {profile.address}{' '}
                  </li>
                  <li>
                    <span class="font-weight-semibold">Email :</span>{' '}
                    {profile.email}{' '}
                  </li>
                  <li>
                    <span class="font-weight-semibold">Телефон :</span>{' '}
                    {profile.phone}
                  </li>
                </ul>
                <div class="row profie-img">
                  <div class="col-md-12">
                    <div class="media-heading">
                      <h3 class="card-title mb-3 font-weight-bold">Интересы</h3>
                    </div>
                    <p>{profile.interests}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfileRight;
