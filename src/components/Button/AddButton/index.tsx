import React, { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

type TAddButtonProps = {
  /**
   * Is this the onClick Event of the button.
   */
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
};

const AddButton: FC<TAddButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="addButton" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export { AddButton, TAddButtonProps }