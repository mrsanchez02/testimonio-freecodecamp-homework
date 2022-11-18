import './App.css';
import Testimonio from './components/Testimonio'
import InfoTestimonios from './InfoTestimonios';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {InfoTestimonios.map((testimonio,index) => (
          <Testimonio 
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
          ))}
      </div>
    </div>
  );
}

export default App;
