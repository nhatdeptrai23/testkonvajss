import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Image } from 'react-konva';
import useImage from 'use-image';

const linkImage = ["https://konvajs.org/assets/lion.png", "/anh1.jpeg", "/logo192.png"]
const link2="/anh1.jpeg"

const LionImage = () => {
        
        const [image] = useImage(link2);    
        return <Image image={image} draggable={true} />;
  };



export default function TimeLine(){
  return (
    <div>
      Try to trag and image into the stage:
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Rect x={400} y={100} width={100} height ={50} fill="#00D2FF" draggable={true} />  
            <Rect x={400} y={200} width={100} height ={50} fill="#00D2FF" draggable={true} />   
            <LionImage />
     
        </Layer>
      </Stage>
    </div>
  );
}