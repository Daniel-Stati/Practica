import React from 'react';
import './App.css';
import Instagram from './Instagram.png'
import Facebook from './Facebook.png'
import YouTube from './YouTube.png'
import Image1 from './Image1.png'
import Image2 from './Image2.png'
import Image3 from './Image3.png'
import Image4 from './Image4.png'
import Image5 from './Image5.png'
import Image6 from './Image6.png'
import Image7 from './Image7.png'
import Image8 from './Image8.png'
import Image9 from './Image9.png'

function LangButton(props) {
  const { text, onClick } = props;

  return (
    <button className='LangButton' onClick={onClick}>{text}</button>
  );
}


function CatButton(props) {
  const { text, onClick } = props;

  return (
    <button className='CatButton' onClick={onClick}>{text}</button>
  );
}

function AboutButton(props) { 
  const { text, onClick } = props; 
 
  return ( 
    <button className='AboutButton' onClick={onClick}>{text}</button> 
  ); 
} 

function LeftButton(props) {
  const { text, onClick } = props;

  return (
    <button className='LeftButton' onClick={onClick}>{text}</button>
  );
}

function RightButton(props) {
  const { text, onClick } = props;

  return (
    <button className='RightButton' onClick={onClick}>{text}</button>
  );
}

function HeshButton(props) { 
  const { text, onClick } = props; 
 
  return ( 
    <button className='HeshButton' onClick={onClick}>{text}</button> 
  ); 
}



function SquareButton(props) { 
  const { text, onClick } = props; 
 
  return ( 
    <button className='SquareButton' onClick={onClick}>{text}</button> 
  ); 
}

function CartButton(props) { 
  const { text, onClick } = props; 
 
  return ( 
    <button className='CartButton' onClick={onClick}>{text}</button> 
  ); 
}

function CategoriesButton(props) { 
  const { text, onClick } = props; 
 
  return ( 
    <button className='CategoriesButton' onClick={onClick}>{text}</button> 
  ); 
}

function FavButton(props) {
  const { text, onClick } = props;

  return (
    <button className='FavButton' onClick={onClick}>{text}</button>
  );
}

function CosButton(props) {
  const { text, onClick } = props;

  return (
    <button className='CosButton' onClick={onClick}>{text}</button>
  );
}

function FavbButton(props) {
  const { text, onClick } = props;

  return (
    <button className='FavbButton' onClick={onClick}>{text}</button>
  );
}

function DescButton(props) {
  const { text, onClick } = props;

  return (
    <button className='DescButton' onClick={onClick}>{text}</button>
  );
}

function DetButton(props) {
  const { text, onClick } = props;

  return (
    <button className='DetButton' onClick={onClick}>{text}</button>
  );
}

function Email(props) {
  const { text} = props;

  return (
  <input className='Email' placeholder={text}></input>

  );
}

function Nume(props) {
  const { text} = props;

  return (
  <input className='Nume' placeholder={text}></input>

  );
}

function RedButton(props) {
  const { text, onClick } = props;

  return (
    <button className='RedButton' onClick={onClick}>{text}</button>
  );
}

function SocialButton(props) {
  const {Link, SocialImage} = props;

  return (
    <a className="SocialButton" href={Link} target="_blank" rel="noopener noreferrer">
      <img src={SocialImage} alt="Social Media" />
    </a>
  );
}

function Search(props) {
  const { text} = props;

  return (
  <input className='Search' placeholder={text}></input>

  );
}

function ImageCard(props) {
  const{Image} = props;

  return (
    <img className='ImageCard' src={Image}/>
  )
}

function Compania(props) {
  const {text} = props;
  return (
    <p className='Compania' >{text}</p>
  );
}

function SubComp(props) {
  const {text} = props;
  return (
    <p className='SubComp' >{text}</p>
  );
}

function Tel(props) {
  const {text} = props;
  return (
    <p className='Tel' >{text}</p>
  );
}

function NrButton(props) {
  const { text, onClick } = props;

  return (
    <button className='NrButton' onClick={onClick}>{text}</button>
  );
}

function Ceasu(props) {
  const {text} = props;
  return (
    <p className='Ceasu' >{text}</p>
  );
}

function Uni(props) {
  const {text} = props;
  return (
    <p className='Uni' >{text}</p>
  );
}

function UniInf(props) {
  const {text} = props;
  return (
    <p className='UniInf' >{text}</p>
  );
}



function App() {
  const handleButtonClick = () => {
    alert('Buton apăsat!');
  };

  return (
    <div className="App">
      <header className="App-header">


        <br></br>
        <LangButton text="RO" onClick={handleButtonClick} />
        <br></br>
        <LangButton text="RU" onClick={handleButtonClick} />
        <br></br>
        <LangButton text="ENG" onClick={handleButtonClick} />
        <br></br>

        <CatButton text="Toate Categoriile" onClick={handleButtonClick} />
        <br></br>

        <AboutButton text="Despre Companie" onClick={handleButtonClick} /> 
        <br></br> 

        <LeftButton text="<" onClick={handleButtonClick} />
        <br></br>

        <RightButton text=">" onClick={handleButtonClick} />
        <br></br>


      <div className='MultHeshButton'>
            <HeshButton text="#scaune" onClick={handleButtonClick} /> 
            <HeshButton text="#mese" onClick={handleButtonClick} /> 
            <HeshButton text="#coș" onClick={handleButtonClick} /> 
            <HeshButton text="#softbox" onClick={handleButtonClick} /> 
            <HeshButton text="#comode" onClick={handleButtonClick} /> 
            <HeshButton text="#cutie" onClick={handleButtonClick} /> 
            <HeshButton text="#filtru" onClick={handleButtonClick} /> 
            <HeshButton text="#filtru" onClick={handleButtonClick} /> 
            <HeshButton text="#filtru" onClick={handleButtonClick} /> 
      </div>

      <br></br>

      <div className='MultSquareButton'>
            <SquareButton text="Promoții" onClick={handleButtonClick} />
            <SquareButton text="Noutăți" onClick={handleButtonClick} />
            <SquareButton text="Sfaturi" onClick={handleButtonClick} />
            <SquareButton text="Review" onClick={handleButtonClick} />
      </div>

      <br></br>

      <CartButton text="🛒" onClick={handleButtonClick} />
      <br></br>
    
      <div className='MultCategoriesButton'>
            <CategoriesButton text="Categorie:" onClick={handleButtonClick} />
            <CategoriesButton text="Cat1" onClick={handleButtonClick} />
            <CategoriesButton text="Cat2" onClick={handleButtonClick} />
            <CategoriesButton text="Cat3" onClick={handleButtonClick} />
            <CategoriesButton text="Cat4" onClick={handleButtonClick} />
            <CategoriesButton text="Toate produsele" onClick={handleButtonClick} />
      </div>
      <br></br>

      <FavButton text="🤍Favorite" onClick={handleButtonClick} />
        <br></br>

        <CosButton text="Coș" onClick={handleButtonClick} />
        <br></br>

        <FavbButton text="🤍" onClick={handleButtonClick} />
        <br></br>

        <DescButton text="Descopera" onClick={handleButtonClick} />
        <br></br>

        <DetButton text="Detalii" onClick={handleButtonClick} />
        <br></br>


        <Email text='Email'></Email>
        <br></br>

        <Nume text='Nume'></Nume>
        <br></br>

        <RedButton text="Obtine Reducerea" onClick={handleButtonClick} />
        <br></br>

        
        
       
        <div className='MultSocialButton'>
        <SocialButton Link="https://facebook.com" SocialImage={Facebook} />
        <SocialButton Link="https://www.instagram.com/" SocialImage={Instagram} />
        <SocialButton Link="https://www.youtube.com/" SocialImage={YouTube} />
      </div>

      <Search text="What you want to search?"/>

      <br></br>

      <ImageCard Image={Image1}/>
      <br></br>

      <div>
          <div>
            <ImageCard Image={Image2}/>
            <ImageCard Image={Image3}/>
          </div>
          <div>
            <ImageCard Image={Image4}/>
            <ImageCard Image={Image5}/>
          </div>
      </div>

      <Compania text="Compania Ta"  />
        <br></br>
        
      <SubComp text="Cel mai mare producător și distribuitor de X in Moldova"  />
        <br></br>

      <Tel text="Solicita apel"  />
        <br></br>
  
      <NrButton text="+373 22 111 111" onClick={handleButtonClick} />
        <br></br>
       
      <Ceasu text="Astazi lucram: 09:00 - 18:00"  />
        <br></br>

      <Uni text="Unitatile frigorifice XXX"  />
        <br></br>

      <UniInf text="Compania Noastra îți pune la dispoziţie o gamă generoasă de unităţi frigorifice de la Xxxx, cunoscute în special pentru calitatea lor profesională şi performanţa excelentă ."  />
        <br></br>

        <ImageCard Image={Image6}/>
        <ImageCard Image={Image7}/>
        <ImageCard Image={Image8}/>
        <ImageCard Image={Image9}/>

      </header>
    </div>
  );
}

export default App;
