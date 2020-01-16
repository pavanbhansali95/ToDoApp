import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const ToDoAddItem  = React.memo(props => {
    console.log('todoadditem');
    let titleRef;
    let descriptionRef;
    const getDialogContent = () => {
        return(
        <form>
                  <div className="form-div">
              <label className="labels">Title</label>
              <input ref={(title) => titleRef = title} type="text" placeholder="Title" />
            </div>
            <div className="form-div">
              <label className="labels">Description</label>
              <input ref={(description) => descriptionRef = description}  placeholder="Description"  type="text"  />
            </div>
        </form>
        );
    }
    return(
        <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
      //   onEntering={handleEntering}
        aria-labelledby="confirmation-dialog-title"
        open={props.open}
      >
        <DialogTitle id="confirmation-dialog-title">Add Note</DialogTitle>
        <DialogContent dividers>{getDialogContent()}
        </DialogContent>
        <DialogActions>
          <Button onClick = { () => props.onCancel() } color="primary">
            Cancel
          </Button>
          <Button onClick = { () => props.onProceed(titleRef.value,descriptionRef.value) } color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
});
export default ToDoAddItem;