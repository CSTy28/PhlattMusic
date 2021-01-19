import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';


function Contact() {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [result, setResult] = useState(null);

    const onInputChange = event => {
        //var name = event.target.name;
        //var value = event.target.value
        const {name, value} = event.target
    
        setState({
          ...state,
          [name]: value
        });
        console.log(state)
      };

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/', { ...state })
            .then(response => {
                setResult(response.data);
                setState({ name: '', email: '', subject: '', message: '' });
            })
            .catch(() => {
                setResult({ success: false, message: 'Something went wrong. Try again later'});
            });
    }
    



    



    function scroll (){
        console.log(window.scrollY)
        if (window.scrollY > 2000) {
            var citems = document.querySelectorAll('.contact-item');
            citems.forEach(inp => inp.classList.add('active'))
        }
      }
    
        window.addEventListener('scroll', scroll)

    return (
        <section className='contactSection' id='contact-me'>

            <div>
                <h1 className='contact-item c-item1'>Contact Me</h1>
            </div>

            {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
            
            <form onSubmit={sendEmail}>
                <div className='contact-item c-item2'>
                    <input type='text' name='name' placeholder='Name' onChange={onInputChange} ></input>
                </div>
                <div className='contact-item c-item3'>
                    <input type='email' name='email' placeholder='Email Address' onChange={onInputChange} ></input>
                </div>
                <div className='contact-item c-item4'>
                    <textarea type='text' name='message' placeholder='Message' cols='60' rows='10' onChange={onInputChange} ></textarea>
                </div>
                <button className='contact-item c-item5' type='submit'>SEND</button>
                
                
            </form>
            
        </section>
    )
}

export default Contact
