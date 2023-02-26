import React, {FC, useRef, useState} from 'react';

interface IDragAndDrop extends React.PropsWithChildren {
}
const DragAble: FC<IDragAndDrop> = (props ) => {
  const { children } = props;
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const [list, setList] = useState(children);
  const onMouseDown = (e: React.MouseEvent) => e.currentTarget.setAttribute('draggable', String(true));
  const onMouseUp = (e: React.MouseEvent) => e.currentTarget.removeAttribute('draggable');
  const onDragStart = (index: number) => dragItem.current = index;
  const onDragEnter = (index: number) => dragOverItem.current = index;
  const onDragEnd = () => {
    const copyListItems = [...React.Children.toArray(list)];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = 0;
    dragOverItem.current = 0;
    setList(copyListItems);
  };
  return (
    <React.Fragment>
      {React.Children.map(list, ((elm, index) => {
        if (React.isValidElement(elm)) return React.cloneElement(elm, {
          ... {
            onMouseDown,
            onMouseUp,
            onDragStart: () => onDragStart(index),
            onDragEnter: () => onDragEnter(index),
            onDragEnd,
            style: {...elm.props.style, userSelect: 'none'}
          }
        })
      }))}
    </React.Fragment>
  );
};

export default DragAble;