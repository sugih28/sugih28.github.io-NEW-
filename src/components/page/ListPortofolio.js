import React from 'react'
import ModalPortofolio from './ModalPortofolio';

function ListPortofolio({porto}) {
    return (
        <div className="row">
            <ModalPortofolio porto={porto}/>
            
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-thumn">
                                <img src="" alt="" />
                            </div>

                            <div className="panel-txt-thumn">
                                <span>
                                    <center>
                                        <br/><br/>
                                        <h1>{porto.title}</h1>
                                        Q&A Forum
                                    </center>
                                </span>
                            </div>

                            <div className="body">
                                <button className="btn btn-dark-ikp col-md-12 col-xs-12 col-sm-12"  data-target={'#porto-' + porto.id} data-toggle="modal">SEE DETAIL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPortofolio
