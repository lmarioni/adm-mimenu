import React, {useState, useContext} from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Context } from '../../../Context'

const divRegistro = {
    border: '1px solid #EBEBEB',
    borderRadius: 5
}

const errorDiv = {
    color: 'red',
    textAlign: 'center!important'
}

export const Login = ({idCurso = ''}) => {
    
    const { activateAuth } = useContext(Context)
    const [error, setError] = useState('');//se usa por si hay algun error en el formulario
    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false); //cuando envia a registrar

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
            var url = `${process.env.REACT_APP_API_URL}/login`;
            var data = {...inputs, role: 'admin' };
            fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                if(response.status === 'success'){
                   activateAuth(response.token)
                    window.location.href = `${process.env.REACT_APP_URL}/`;
                }else{
                    setLoading(false)
                    setError(response.message)
                }
            });
    }

    return(
        <React.Fragment>

                <h3 className="text-center">Ingresa con tu cuenta</h3>

                  <form onSubmit={handleSubmit}>
                      <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="email" class="form-control" name="email" value={inputs.email} onChange={handleInputChange} required />
                      </div>
                      <div class="form-group">
                          <label for="pwd">Contraseña:</label>
                          <input type="password" class="form-control" name="pwd" value={inputs.pwd} onChange={handleInputChange} required />
                      </div>
                      { error && 
                  <div class="alert alert-danger text-center" role="alert">
                    {error}
                    </div>
                 }
                      <button type="submit" disabled={ loading ? 'disabled' : '' } class="btn btn-primary mb-4 btn-block btn-lg"> { !loading ? "Ingresar" : <AiOutlineLoading3Quarters size='25' animation="spin" className='spin' /> } </button>
                  </form>
        </React.Fragment>
    )
}
