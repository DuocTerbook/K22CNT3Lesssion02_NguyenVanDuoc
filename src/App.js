import logo from './logo.svg';
import './App.css';
import Func_JSX_NguyenVanDuoc from './Component/Func_JSX_NguyenVanDuoc';
import Class_NguyenVanDuoc from './Component/class_NguyenVanDuoc';
function App() {
  return (
    <section className="App">
        <h1>Duoc02 JSX</h1>
        {/* function Component duoc02 */}
        < Func_JSX_NguyenVanDuoc />
        < Func_JSX_NguyenVanDuoc fullname="Nguyen Van Duoc" age="20"/>
        <Class_NguyenVanDuoc />
        <hr/>
        <Class_NguyenVanDuoc info="Hoc ReactJS" time="11"/>
    </section>
  );
}

export default App;
