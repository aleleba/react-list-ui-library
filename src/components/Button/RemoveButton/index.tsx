import React, { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

type TRemoveButtonProps = {
  /**
   * Is this the onClick Event of the button.
   */
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
};

const RemoveButton: FC<TRemoveButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="removeButton" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export { RemoveButton, TRemoveButtonProps }