import React, {useState} from 'react';
import ColorPallet from "src/components/ColorPallet";

const Home = () => {
  const [open, setOpen] = useState(false);

    return (
        <>
          <div>
            <button onClick={() => setOpen(true)}>Change color</button>
          </div>
          <ColorPallet open={open} onClose={() => setOpen(false)}/>
        </>
    );
};

export default Home;