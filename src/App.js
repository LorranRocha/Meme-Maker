import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [firstline, setfirstline] = useState('');
  const [secondline, setsecondline] = useState('');
  const [image, setimage] = useState('');

  const onChangeLinhaUm = function(evento){
    setfirstline(evento.target.value);
  }

  const onChangeLinhadois = function(evento){
    setsecondline(evento.target.value);
  }

  const onChangeimagem = function(evento){
    setimage(evento.target.value);
  }

  const onClickExportar = function(evento){
      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
      });
  }

  return (
    <div className="App">
      
      
        <select onChange={onChangeimagem}>
          <option value="fire">House on Fire</option>
          <option value="nerd">Smart Guy</option>
          <option value="child">Child</option>
        </select>
        <br/><br/>
      
        <input onChange={onChangeLinhaUm} type="text" placeholder="First Line"></input><br/><br/>

        <input onChange={onChangeLinhadois} type="text" placeholder="Second Line"></input><br/><br/>

        <div className="meme" id="meme">
          <span className="txt1">{firstline}</span><br/>
          
          <img src={"/img/"+ image +".jpg"} /><br/>

          <span className="txt2">{secondline}</span>
        </div>

        <br/>
        <button onClick={onClickExportar} className="button-30" role="button">Save Meme</button>

        <br/><br/><br/>
        <p className="copyright">created by: <a href="https://www.lorranrocha.com/" target="_blank">Lorran Rocha</a></p>
    </div>
  );
}

export default App;
