import React, { FC, MouseEventHandler, ChangeEventHandler } from 'react';
import { TItem, Item, ButtonTypes, Button, Input } from '@components';
import './style.scss';
import { on } from 'events';

type TListProps = {
  /**
   * Is this the title of the card.
   */
  list: TItem[]
  /**
   * Is this the title of the card.
   */
  placeholderInput?: string
  /**
     * Is this the onChange event of the input
     */
  onChangeInput?: ChangeEventHandler<HTMLInputElement>
  /**
   * Is this the onClick Event of the button.
   */
  onClickAddItem?: MouseEventHandler<HTMLButtonElement> | undefined
  /**
   * Is this the onClick Event of the button.
   */
  onClickRemoveItem?: ((index: number) => void)
  /**
   * Is this the on Event triggered by the checkbox.
   */
  handleChangeState?: ((index: number) => void)
};

const List: FC<TListProps> = ({
  list,
  placeholderInput,
  onChangeInput,
  onClickAddItem,
  onClickRemoveItem,
  handleChangeState
}) => {
  return (
    <div className="List">
      <table>
        <tbody>
          { list !== undefined && list.map((item, index) => (
            <tr key={index}>
              <td><Item name={item.name} status={item.status} handleChange={ () => handleChangeState !== undefined ? handleChangeState(index) : undefined} /></td>
              <td>
                <div className="delete-button-container">
                  <Button 
                    type={ButtonTypes.REMOVE}
                    onClick={ () => onClickRemoveItem !== undefined ? onClickRemoveItem(index) : undefined }
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Input 
          placeholder={placeholderInput}
          onChange={onChangeInput}
        />
      </div>
      <div className="button-container">
        <Button 
          type={ButtonTypes.ADD}
          onClick={onClickAddItem}
        />
      </div>
    </div>
  );
};

export { List, TListProps }