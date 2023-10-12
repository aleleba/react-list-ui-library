import React, { FC, ChangeEventHandler } from 'react';
import './style.scss';
import { joinClassNames } from '@utils/index';

type TItemProps = {
  /**
   * Is this the name of the item.
   */
  name?: string,
  /**
   * Is this the status of the item.
   */
  status?: Status,
  /**
   * Is this the on Event triggered by the checkbox.
   */
  handleChange?: ChangeEventHandler<HTMLInputElement>
};

type TItem = {
  name: string,
  status: Status
}

enum Status {
  TODO = 'TODO',
  DONE = 'DONE'
}

export const getStatusClass = ({ status }: { status: Status }) => {
  switch (status) {
      case 'TODO':
          return 'to-do';
      case 'DONE':
          return 'done';
      default:
          return ''
  }
}

const Item: FC<TItemProps> = ({
  name,
  status = Status.TODO,
  handleChange
}) => {
  const classNames = joinClassNames(getStatusClass({ status }));
  return (
    <div className="round">
      <input
        id={name}
        type="checkbox"
        checked={status === Status.DONE}
        name={name}
        className={classNames}
        onChange={handleChange}
      />
      <label htmlFor={name}/>
      <span className={classNames}>{name}</span>
    </div>
  );
};

export { Item, TItemProps, TItem, Status }