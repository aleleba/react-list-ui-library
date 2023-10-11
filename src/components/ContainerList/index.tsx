import React, { FC } from 'react';
import './style.scss';

type TContainerListProps = {
  /**
   * Is this the title of the card.
   */
  title?: string,
  /**
   * Is this the child component of the card. (The content)
   */
  children?: JSX.Element,
};

const ContainerList: FC<TContainerListProps> = ({ title, children }) => {
  return (
    <div className="ContainerList">
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export { ContainerList, TContainerListProps }