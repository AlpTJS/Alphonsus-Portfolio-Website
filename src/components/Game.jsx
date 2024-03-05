// Game.jsx
import React, { useState, useEffect } from 'react';
import { ground, dinoStationary } from "../assets";
import { updateGround, setupGround } from '../gameFunctions/ground';
import { updateDino, setupDino, getDinoRect, setDinoLose } from '../gameFunctions/dino';
import { updateCactus, setupCactus, getCactusRects } from '../gameFunctions/cactus';



//2. intergrate script.js

//Issues:
//Not sure if integration of script.js works...
//Styles.css have not altered

const SPEED_SCALE_INCREASE = 0.00001

const Game = () => {

  //not sure if this replace let
  const [lastTime, setLastTime] = useState(null);
  const [speedScale, setSpeedScale] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
   
    const scoreElem = document.querySelector("[data-score]")
    const startScreenElem = document.querySelector("[data-start-screen]") //where is this from
    

    const handleStart = () => {
      setLastTime(null)
      setSpeedScale(1);
      setScore(0);
      setupGround();
      setupDino();
      setupCactus();
      startScreenElem.classList.add("hide");
      window.requestAnimationFrame(update); // call update function..
    }

    const update = (time) => {
      if (lastTime === null) {
        setLastTime(time);
        window.requestAnimationFrame(update);
        return;
      }

      const delta = time - lastTime;

      updateGround(delta, speedScale);
      updateDino(delta, speedScale);
      updateCactus(delta, speedScale);
      updateSpeedScale(delta);
      updateScore(delta);

      if (checkLose()) return handleLose();

      setLastTime(time);
      window.requestAnimationFrame(update);

    }

    const checkLose = () => {
      const dinoRect = getDinoRect();
      return getCactusRects().some((rect) => isCollision(rect, dinoRect));
    };


    //Check if 2 rectangle overlaps
    const isCollision = (rect1, rect2) => {
      return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
      );
    };

    const updateSpeedScale = (delta) => {
      setSpeedScale((prevSpeedScale) => prevSpeedScale + delta * SPEED_SCALE_INCREASE);
    };

    const updateScore = (delta) => {
      setScore((prevScore) => prevScore + delta * 0.01);
      scoreElem.textContent = Math.floor(score);
    };

    const handleLose = () => {
      setDinoLose();
      setTimeout(() => {
        document.addEventListener('keydown', handleStart, { once: true });
        startScreenElem.classList.remove('hide');
      }, 100);
    };

    document.addEventListener('keydown', handleStart, { once: true });
    
  
    }, []); // What is the point of 113 -117


  return (
    <div className="world" style={{ overflow: 'hidden' }}>
      <div className="score" style={{ position: 'absolute', fontSize: '3vmin', right: '1vmin', top: '1vmin' }}>0</div>
      <div className="start-screen" style={{ position: 'absolute', fontSize: '5vmin', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Press Any Key To Start</div>
      <img src={ground} style={{ position: 'absolute', '--left': 0, width: '300%', bottom: 0, left: 'calc(var(--left) * 1%)' }} />
      <img src={ground} style={{ position: 'absolute', '--left': 0, width: '300%', bottom: 0, left: 'calc(var(--left) * 1%)' }} />
      <img src={dinoStationary} style={{ position: 'absolute', '--bottom': 0, left: '1%', height: '30%', bottom: 'calc(var(--bottom) * 1%)' }} />
    </div>
  );
}


export default Game;
