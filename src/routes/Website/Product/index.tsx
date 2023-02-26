import React from 'react';
import DragAble from 'src/components/DragAndDrop';

const Product = () => {
    return (
        <div>
          <h2>Drag and drop to change the order of items</h2>
            <DragAble>
              {new Array(10).fill('').map((_item, index) => (
                <div key={index} style={{padding: 12, border: '1px solid #ddd', backgroundColor: `rgba(0, 34, 0, ${Math.random()})`}}>item-{index}</div>
              ))}
            </DragAble>
        </div>
    );
};

export default Product;