import React, { useState, useEffect } from 'react';

export default function Form({location, user}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [ID, setID] = useState('')
  const [btnText, setBtnText] = useState('Add')
  const [status, setStatus] = useState('')

  useEffect(()=>{
    if(location.user){
      setName(location.user.name);
      setAge(location.user.age);
      setID(location.user.id);
      setBtnText('Edit')
    }
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading')
    let url,method;
    //check if edit or add
    if(btnText === 'Add') {
      url = `${process.env.API_URL}/user/`;
      method = 'POST';
    }
    if(btnText === 'Edit') {
      url = `${process.env.API_URL}/user/${ID}`;
      method = 'PATCH';
    }
    console.log(url);
    //send fetch
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, age})
    })
    .then((r)=>r.json())
    .then((r)=>{
      console.log(r);
      if(r.error){ 
        return setStatus(r.msg)
      }
      setStatus('success')
    })
    .catch((e)=>{
      setStatus('loading')
    })
    //alert sucess or fail

  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/>
        <button type="submit">{btnText}</button>
        {status}
    </form>
  );
}
