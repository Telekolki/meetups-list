import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';

const Todo = (props) => {
  const [isModal, setIsModal] = useState(false);

  const onDelete = () => {
    setIsModal(false);
  };

  const onCancel = () => {
    setIsModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => setIsModal(true)}>
          Delete
        </button>
      </div>
      {isModal && <Modal onDelete={onDelete} onCancel={onCancel} />}
      {isModal && <Backdrop />}
    </div>
  );
};

export default Todo;
