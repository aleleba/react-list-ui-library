import React, { FC, MouseEventHandler, ChangeEventHandler } from 'react';
import { TItem, Item, ButtonTypes, Button, Input } from '@components';
import './style.scss';
import { on } from 'events';

type TListProps = {
  /**
   * Is this the list of items as an array.
   */
  list: TItem[]
  /**
   * Is this the text of the placeholder of the input of the List.
   */
  placeholderInput?: string
  /**
   * Is this the text of the value of the input of the List.
   */
  valueInput?: string
  /**
   * Is this the onChange event of the input to add 
   */
  onChangeInput?: ChangeEventHandler<HTMLInputElement>
  /**
   * Is this the onClick Event of the button to add an item.
   */
  onClickAddItem?: MouseEventHandler<HTMLButtonElement> | undefined
  /**
   * Is this the onClick Event of the button to Remove a Item.
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
  valueInput = '',
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
          value={valueInput}
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