import React from 'react'
// import "./styles.scss";

import {Tabs, Tab} from 'react-bootstrap';

import {Login} from './Login'
import {Register} from './Register'

const divRegistro = {
    border: '1px solid #EBEBEB',
    borderRadius: 5
}

export const Auth = () => {
    
return(
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center mt-3">
                    <img width="50%" src="https://firebasestorage.googleapis.com/v0/b/menu-digital-520a9.appspot.com/o/assets%2Fbranding%2Fmimenu-logocol.png?alt=media&token=1f65b1ba-7c82-49ec-a996-a20fcf0fe8e6" alt=""/>
                </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 mt-3" >
                     <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Ingreso" >
                            <Login />
                        </Tab>
                    
                    </Tabs>
                    </div>
            </div>
        </div>
    </React.Fragment>
)

}
