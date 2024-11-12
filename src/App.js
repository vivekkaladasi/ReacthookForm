
import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  const{
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm();


  function onSubmit (data){
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label> firstname</label>
      <input
      className={errors.firstname ? 'input-error' : ""}
       {... register('firstName' , {required: true,  minLenght:3 , maxLenght: 6})} />
      </div>
      

      
      <div>
      <label> middlename:</label>
      <input {...register('middleName')}/>
      </div>

      <div>
      <label> lastname:</label>
      <input {...register('lastName')}/>
      </div>

      <input type = 'submit' />
    </form>
  );  
}

export default App;
