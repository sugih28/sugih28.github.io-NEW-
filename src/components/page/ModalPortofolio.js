import React from 'react'

function ModalPortofolio({porto}) {
    const style = {
        width : '100%',
        height : 'auto'
    }

    return (
        <div className="modal fade modal-bg" id={"porto-" + porto.id} tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 className="modal-title">{porto.title}</h4>
		      </div>
		      <div className="modal-body">
		        <img src="" alt="" style={style} />
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
    )
}

export default ModalPortofolio
