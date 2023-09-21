import './App.css'
import './components/ButtonFatec/ButtonFatec.module';
import ButtonFatec from './components/ButtonFatec/ButtonFatec.module';
import InputFatec from './components/InputFatec';

function App() {
  return (
    <>
      <p>
        Olá Mundo!
      </p>
      <p>
        Teste
      </p>
      <InputFatec/>
      <ButtonFatec type='button' label='Meu botão'/>
      <ButtonFatec type='submit' label='Enviar form'/>

    </>
  )
}

export default App
