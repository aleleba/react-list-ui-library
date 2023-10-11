import React, { FC, MouseEventHandler } from 'react';
import { AddButton } from './AddButton';
import { RemoveButton } from './RemoveButton';

type TButtonProps = {
  /**
   * Is this the title of the card.
   */
  type?: ButtonTypes,
  /**
   * Is this the onClick Event of the button.
   */
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
};

enum ButtonTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

const Button: FC<TButtonProps> = ({ type = ButtonTypes.ADD, onClick }) => {
  return(
    <>
      {
        type === ButtonTypes.ADD &&
        <AddButton onClick={onClick} />
      }
      {
        type === ButtonTypes.REMOVE &&
        <RemoveButton onClick={onClick} />
      }
    </>
  )
};

export { Button, TButtonProps, ButtonTypes }