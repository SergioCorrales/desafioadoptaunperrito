import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Titulo from './components/Header';
import Foot from './components/Footer';

const perritos = [
  {
    id: 1,
    img: "https://www.publimetro.cl/resizer/4FVzf7nFJrTlEt67mxiJuofmBaM=/1440x1080/filters:format(jpg):quality(70):focal(359x245:369x255)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/7H3JC4BVUVDQNF3P45CHYYSU2A.jpg",
    nombre: "Bartolo",
    descripcion: "Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!",
    bg: "success",
    tx: "Perro Mestizo"
  },
  {
    id: 2,
    img: "https://www.shutterstock.com/image-photo/angry-chihuahua-dog-growls-scraggles-600nw-779916787.jpg",
    nombre: "Messi",
    descripcion: "Es juegueton, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
    bg: "primary",
    tx: "Chihuahua"
  },
  {
    id: 3,
    img: "https://poodlelandia.com/wp-content/uploads/2015/11/Poodle-despelucado.jpg",
    nombre: "Gohan",
    descripcion: "Perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!",
    bg: "danger",
    tx: "Poodle"
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4203281/pexels-photo-4203281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Princesa",
    descripcion: "Es una compañera leal y cariñosa que adora a los mimos y abrazos. ¡Ayuda a princesa a encontrar su final feliz!",
    bg: "warning",
    tx: "Beagle"
  }
];

function App() {
  return (
    <>
      <Titulo />
      <div className='targetas'>
        {perritos.map(p => (
          <MyCard
            key={p.id}
            image={p.img}
            title={p.nombre}
            description={p.descripcion}
            background={p.bg}
            text={p.tx}
          />
        ))}
      </div>
      <Foot />
    </>
  );
}

export default App;