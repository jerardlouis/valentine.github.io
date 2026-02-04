import 'styles.css';
import {useState} from 'react';
function App() {
  const [text, setText] = useState('Will you be my valentine?');
  const [img, setImg] = useState("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWphMHVqczg1NHFocDN5bGk3a2Mzd2t4cnpzdGtzcjBjbDVhcjdmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SoZAMdHWldHbQHLCGZ/giphy.gif");
  const [buttonSize, setButtonSize] = useState(16);
  const sure = ["Are you sure?", "Are you really sure?", "Are you really REALLY sure???", "Are you SURE you're sure that you're sure???"];
  function yesClick() {
    setText('HOORAY <3');
    setImg("https://i.pinimg.com/originals/14/12/a6/1412a602c0cd0027a7c494967a564e7e.gif");
  }

  function noClick() {
    var num = Math.floor(Math.random() * 4);
    setText(sure[num]);
    setButtonSize(buttonSize + 36);
    console.log(buttonSize);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
        <button className="yes" style={{fontSize:buttonSize}} onClick={yesClick}>
            Yes
          </button>
          <button className="no" style={{fontSize:16}} onClick={noClick}>
            No
          </button>
      
      </header>
      <a href="http://fathomless-bayou-60027.herokuapp.com/"><small>By Jerard Louis Dayanghirang Guevarra
        <br/>
        Click here to find me online!
        </small></a>
        <br/>
        <small className="seo">An app by Jerard Louis Dayanghirang Guevarra, software engineer and musician. @jerardlouis Jerard Louis Dayanghirang Guevarra @jerardlouis </small>
    </div>
  );
}
/*
Note:
Page is literally just like gif image of hello kitty then
Will you be my valentine
Yes
No
If yes redirect to OKAY YAY
If no make the yes button bigger
*/
export default App;