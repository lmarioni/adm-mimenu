import { useContext } from 'react';

import { Context } from '../Context'

const Fetch = () => {

  const { token } = useContext(Context);

    const data = {
      headers: new Headers({
        'Authorization': 'Bearer ' + token
      })
    }

    fetch(`${process.env.REACT_APP_BASE_URL}/tienda/panel`, data)
      .then(res => res.json())
      .then(response => {
        return response
      });
     
  }

export default Fetch