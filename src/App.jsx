import { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

//Think of parallax as multiple pages. Use ParallaxLayer to animate the children, think of each layer as a page that will take up the entire screen. 
//offset tells the parallaxlayer to start at the top of the page after the offset given.
//We can change the speed of parallaxlayer by using prop speed.
//We can add images using style prop
//We can span our style i.e. image multiple pages using factor prop
//We can use sticky prop to keep an image or element on the screen when scrolling
function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} factor={4}
        style={{
          backgroundImage: `url(${land})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start:0.9, end:2.5}} style={{ textAlign: 'center' }}>
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05} onClick={() => ref.current.scrollTo(3)}>
          <h2>Watch me land Hooman</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2} onClick={() => ref.current.scrollTo(0)}>
        <h2>HeHe now i will destroy Earth💥💥</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App
