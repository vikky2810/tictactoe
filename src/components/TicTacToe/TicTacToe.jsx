import React from 'react'

import './tictactoe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { useState,useRef } from 'react'



const TicTacToe = () => {
    let [data,setData] = useState(["","","","","","","","",""]);
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if((count % 2 === 0)){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== "")
        {
            console.log(`won1`)
            won(data[2]);
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "")
        {
            console.log(`won2`)
            won(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "")
        {
            console.log(`won3`)
            won(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "")
        {
            console.log(`won4`)
            won(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "")
        {
            console.log(`won5`)
            won(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "")
        {
            console.log(`won6`)
            won(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "")
        {
            console.log(`won7`)
            won(data[8]);
        }
        else if(data[0] === data[1] && data[1] === data[2] && data[2] !== "")
        {
            console.log(`won8`)
            won(data[2]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "")
        {
            console.log(`won9`)
            won(data[6]);
        }
    }
    const won = (winner) =>{
        setLock(true);
        if(winner === "x")
        {
            titleRef.current.innerHTML = `Congratulations : X Wins`
        }
        else{
            titleRef.current.innerHTML = `Congratulations : O Wins`
        }
        
    }
    const reset = () =>{
        // setLock(false);
        // setCount(0)
        // setData = (["","","","","","","","",""])
        // titleRef.current.innerHTML = `Tic Tac Toe Game by Viks`
        window.location.reload();
    }
  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game by Viks</h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e) =>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e) =>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e) =>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={()=>{reset()}}>RESET</button>
    </div>
  )
}

export default TicTacToe;
