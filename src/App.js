import React, { useEffect, useState } from 'react'
import './App.css';
const App = () => {

  const [player,setPlyer] = useState(1);
  const [board,setBoard] = useState({
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:"",
    9:""
  }) 
  const [winner,setwinner] = useState(null)
  const cheackWinner = () =>{
    const symbol = player===1?"🙈":"🐵";
    if(board[1]===symbol && board[2]===symbol && board[3]===symbol){
      setwinner(player)
    }
    else if(board[4] === symbol && board[5]===symbol && board[6]){
      setwinner(player)
    }
    else if(board[7] === symbol && board[8]===symbol && board[9] === symbol){
      setwinner(player)
    }
    else if(board[1] === symbol && board[4]===symbol && board[7] === symbol){
      setwinner(player)
    }
    else if(board[2] === symbol && board[5]===symbol && board[8] === symbol){
      setwinner(player)
    }
    else if(board[3] === symbol && board[6]===symbol && board[9] === symbol){
      setwinner(player)
    }
    else if(board[1] === symbol && board[5]===symbol && board[9] === symbol){
      setwinner(player)
    }
    else if(board[3] === symbol && board[5]===symbol && board[7] === symbol){
      setwinner(player)
    }
    setPlyer(player===1?2:1)
    
    

  }
  useEffect(()=>{
    cheackWinner();
  },[board])

  const play = (boxNo) =>{
    if(board[boxNo]==!"" || winner !== null){
      return
    }
 if(player===1){
  setBoard({...board,[boxNo]:"🙈"})
 }
 else{
  setBoard({...board,[boxNo]:"🐵"})
 }

 }
const reset = ()=>{
  setPlyer(1);
  setBoard({
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:"",
    9:""
  })
  setwinner(null)
 
}

  return (
    <div>
      <h1 className='text-aline'>
        Tic-Tac-Toe
      </h1>
      <div className='display'>
        <span className='player'>
          player1:🙈
        </span>
        <span className='player'>
          player2:🐵
        </span>
      </div>
      <div>
      {
        winner ? (<h1 className='winner'>
          winer is {winner === 1?'🙈':'🐵'}
        </h1> ) :null
      }
      </div>
      <div className='display'> <p className='para'> player{player}{ player === 1?'🙈':'🐵'}is playing</p>  
      </div>
      <div className='bord'>
        <div className='row'>
          <div className='box' onClick={()=>{play(1)}}>
{board[1]}
          </div>
          <div className='box'onClick={()=>{play(2)}}>
{board[2]}
          </div>
          <div className='box' onClick={()=>{play(3)}}>
{board[3]}
          </div>

        </div>

        <div className='row'>
          <div className='box' onClick={()=>{play(4)}}>
{board[4]}
          </div>
          <div className='box' onClick={()=>{play(5)}}>
{board[5]}
          </div>
          <div className='box' onClick={()=>{play(6)}}>
{board[6]}
          </div>

        </div>

        <div className='row'>
          <div className='box' onClick={()=>{play(7)}}>
{board[7]}
          </div>
          <div className='box' onClick={()=>{play(8)}}>
{board[8]}
          </div>
          <div className='box' onClick={()=>{play(9)}}>
{board[9]}
          </div>

        </div>


      </div> 
      <div className='display'><button type='button' onClick={reset} className='btn'> reset</button> </div>
      
    </div>
  )
}

export default App
