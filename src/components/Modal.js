function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn" onClick={props.onDelete}>
        Confirm
      </button>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;
