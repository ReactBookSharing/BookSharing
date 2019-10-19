import React from 'react';
import './ProfileRight.css';
function ProfileRight(props) {
    const { className, profile } = props;
    return (
      <div className={`ProfileRight ${className}`}>
        <div className="card mb-0">
          <div className="card-header">
            <h3 className="card-title font-weight-bold">Профиль пользователя</h3>
          </div>
          <div className="card-body">
            <div className="border-0">
              <div className="profile-log-switch">
                <div className="media-heading">
                  <h3 className="card-title mb-3 font-weight-bold">
                    Персональные данные
                  </h3>
                </div>
                <ul className="usertab-list mb-0">
                  <li>
                    <span className="font-weight-semibold">Полное имя :</span>{' '}
                    {profile.name} {profile.surname}
                  </li>
                  <li>
                    <span className="font-weight-semibold">Адрес :</span>{' '}
                    {profile.address}{' '}
                  </li>
                  <li>
                    <span className="font-weight-semibold">Email :</span>{' '}
                    {profile.email}{' '}
                  </li>
                  <li>
                    <span className="font-weight-semibold">Телефон :</span>{' '}
                    {profile.phone}
                  </li>
                </ul>
                <div className="row profie-img">
                  <div className="col-md-12">
                    <div className="media-heading">
                      <h3 className="card-title mb-3 font-weight-bold">Интересы</h3>
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
