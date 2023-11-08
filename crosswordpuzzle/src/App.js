import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './index.html'; // Landing Page component
import crosswordpuzzle from './crosswordpuzzle'; // Proyek React component


function App() {
  const [answers, setAnswers] = useState({
    d10: '',
    d11:'',
    d12:'',
    d20: '',
    d21: '',
    d22: '',
    d23: '',
    d24: ''
    // Tambahkan state untuk jawaban lainnya
  });

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  // Fungsi untuk validasi jawaban
  const validateAnswers = () => {
    const correctAnswers = {
      //Soal 1
      d10:'W',
      d11:'W',
      d12:'W',
      //Soal 2
      d20:'H',
      d21:'T',
      d22:'T',
      d23:'P',
      d24:'S',
      //Soal 3
      d30:'L',
      d31:'I',
      d32:'N',
      d33:'U',
      d34:'X'
    };
  
    let allCorrect = true;
  
    for (const inputName in correctAnswers) {
      const userAnswer = answers[inputName] ? answers[inputName].toUpperCase() : '';
      const correctAnswer = correctAnswers[inputName] ? correctAnswers[inputName].toUpperCase() : '';
      
      if (userAnswer !== correctAnswer) {
        allCorrect = false;
        // Jika jawaban salah, Anda dapat memberikan umpan balik atau tindakan lainnya di sini
      }
    }
  
    if (allCorrect) {
      alert('Semua jawaban benar!');
    } else {
      alert('Salah satu atau lebih jawaban Anda salah.');
    }
  };

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/crosswordpuzzle" component={ProyekReact} />
    {/* Tambahkan rute-rute lain di sini sesuai kebutuhan */}
  <div className="container">
    <div className="row">
      <div className="col align-self-center">
        <h4>Mendatar</h4>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>1. Singkatan dari "World Wide Web".</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>2. Protokol yang digunakan untuk mengakses situs web melalui koneksi aman.</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>3. Sistem operasi open source yang sering digunakan dalam server web.</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>4. Sistem operasi open source yang banyak digunakan dalam perangkat seluler.</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>5. Sistem operasi buatan Apple</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>
              6. Bahasa pemrograman yang sering digunakan untuk pengembangan aplikasi Android.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>7. Bahasa pemrograman yang sering digunakan untuk pengembangan situs web.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <table className="tabel">
          <tbody>
            <tr>
                <td className="block">
                <input className="d1" type="text" maxLength={1} name="d10" placeholder='1' value={answers.d10} onChange={handleAnswerChange} />
              </td>
              <td className="block">
                <input className="d1m1" type="text" maxLength={1} name="d11" value={answers.d11} onChange={handleAnswerChange}/>
              </td>
              <td className="block">
                <input className="d12" type="text" maxLength={1} name="d12" value={answers.d12} onChange={handleAnswerChange} />
              </td>
              <td className="block" />
            <td className="block">
              <input className="d2" type="text" maxLength={1} placeholder='2' name="d20" value={answers.d20} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d2 m2" type="text" maxLength={1} name="d21" value={answers.d21} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d2" type="text" maxLength={1} name="d22" value={answers.d22} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d2" type="text" maxLength={1} name="d23" value={answers.d23} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d2" type="text" maxLength={1} name="d24" value={answers.d24} onChange={handleAnswerChange}/>
            </td>
          </tr>
          <tr>
            <td className="block" />
            <td className="block">
              <input className="m1" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="m2" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
          </tr>
          <tr>
            <td className="block" />
            <td className="block">
              <input className="m1 d3" type="text" maxLength={1} placeholder='3' name="d30" value={answers.d30} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d3" type="text" maxLength={1} name="d31" value={answers.d31} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d3" type="text" maxLength={1} name="d32" value={answers.d32} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d3 m3" type="text" maxLength={1} name="d33" value={answers.d33} onChange={handleAnswerChange}/>
            </td>
            <td className="block">
              <input className="d3 m2" type="text" maxLength={1} name="d34" value={answers.d34} onChange={handleAnswerChange}/>
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
          </tr>
          <tr>
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="m3" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block" />
          </tr>
          <tr>
            <td className="block">
              <input className="m4" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block">
              <input className="d4" type="text" maxLength={1} placeholder='4' />
            </td>
            <td className="block">
              <input className="d4" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d4 m3" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d4" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d4" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d4 m5" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d4" type="text" maxLength={1} />
            </td>
          </tr>
          <tr>
            <td className="block">
              <input className="m4" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="m5" type="text" maxLength="" />
            </td>
            <td className="block" />
          </tr>
          <tr>
            <td className="block">
              <input classc="m4" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="d5 m6" type="text" maxLength={1} placeholder='5' />
            </td>
            <td className="block">
              <input className="d5" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d5" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d5" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d5 m5" type="text" maxLength={1} />
            </td>
            <td className="block" />
          </tr>
          <tr>
            <td className="block">
              <input className="m4" type="text" max={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="m6" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block" />
            <td className="block" />
            <td className="block">
              <input className="m5" type="text" maxLength={1} />
            </td>
            <td className="block" />
          </tr>
          <tr>
            <td className="block">
              <input className="m4 d6" type="text" maxLength={1} placeholder='6' />
            </td>
            <td className="block">
              <input className="d6" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d6" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d6 m6" type="text" maxLength={1} />
            </td>
            <td className="block" />
            <td className="block">
              <input className="d7" type="text" maxLength={1} placeholder='7' />
            </td>
            <td className="block">
              <input className="d7" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d7 m5" type="text" maxLength={1} />
            </td>
            <td className="block">
              <input className="d7" type="text" maxLength={1} />
            </td>
            </tr>
          </tbody>
        </table>
        <button onClick={validateAnswers}>Validate Answers</button>
      </div>
      <div className="col align-self-center">
        <h4>Menurun</h4>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>1. Nama baterai</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>2. Suku Bangsa</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>3. Nama Penyanyi</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>4. Provinsi paling selatan di Sumatera</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>5. Sayuran yang dimakan mentah</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>
              6. Pohon jenis palem yang umbut batangnya mengandung sagu yang dapat
              dimakan
            </p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="pr-2">
            <p>7. Objek wisata Indonesia Terpopuler di Dunia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Switch>
</Router>  

  );
}
export default App;