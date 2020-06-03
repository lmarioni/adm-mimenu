import React, {useState, useContext} from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Context } from '../../../Context'

export const Register = ({idCurso = ''}) => {
    const { activateAuth } = useContext(Context)
    const [error, setError] = useState('');//se usa por si hay algun error en el formulario
    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false); //cuando envia a registrar

    const [result, setResult] = useState({}) // resultado del logeo

    const handleInputChange = (event) => {
        event.persist();
        setError('')
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }
        setLoading(true);

        if(inputs.passwordconfirm !== inputs.password){
            setError('Las contraseñas deben coincidir');
            setLoading(false);
        }else if(inputs.password.length <= 6){
            setError('La contraseña debe tener al menos 6 caracteres');
            setLoading(false);
        }else{
            var url = `${process.env.REACT_APP_API_URL}/usuarios`;
            var data = { ...inputs };
            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                if(response.status === 'success'){
                   activateAuth(response.token)
                   window.location.href = `${process.env.REACT_APP_URL}/panel`;
                }else{
                    setResult({
                        'status': 'error',
                        'message': response.message
                    })
                }
                setLoading(false);
            });
        }
    }

    return(
        <React.Fragment>

                <h1 className="text-center">Registro </h1>
                <p className="text-center"> Comienza una nueva etapa de tu negocio! </p>

                  <form onSubmit={handleSubmit}>
                      <div class="form-group">
                          <label for="name">Nombre:</label>
                          <input type="text" class="form-control" name="nombre" value={inputs.nombre}  onChange={handleInputChange} required />
                      </div>
                      <div class="form-group">
                          <label for="surname">Apellido:</label>
                          <input type="text" class="form-control" name="apellido" value={inputs.apellido} onChange={handleInputChange} required />
                      </div>
                      <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="email" class="form-control" name="email" value={inputs.email} onChange={handleInputChange} required />
                      </div>
                      <div class="form-group">
                          <label for="pwd">Contraseña:</label>
                          <input type="password" class="form-control" name="password" value={inputs.password} onChange={handleInputChange} required />
                      </div>
                      <div class="form-group">
                          <label for="pwd">Confirmar contraseña:</label>
                          <input type="password" class="form-control" name="passwordconfirm" value={inputs.passwordconfirm} onChange={handleInputChange} required />
                      </div>
                      {
                          error && 
                          <div class="alert alert-danger" role="alert">
                            {error}
                            </div>
                      }
                      {
                          result.status === 'error' &&
                          <div class="alert alert-danger" role="alert">
                              {result.message}
                            </div>
                      }
                      <button type="submit" disabled={ loading ? 'disabled' : '' } class="btn btn-primary mb-4 btn-block btn-lg"> { !loading ? "Siguiente" : <AiOutlineLoading3Quarters size='25' animation="spin" className='spin' /> } </button>
                  </form>
        </React.Fragment>
          
    )
}
