// // import React from 'react'

// // const CvTemplates = () => {
// //   return (
// //     <div>CvTemplates</div>
// //   )
// // }

// // export default CvTemplates


// // import React from 'react';
// // import { useForm } from 'react-hook-form';

// // function MyForm() {
// //   const { register, handleSubmit, errors } = useForm();

// //   const onSubmit = (data) => {
// //     console.log(data);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <input type="text" name="firstName" ref={register({ required: true })} />
// //       {errors.firstName && <span>This field is required</span>}

// //       <input type="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
// //       {errors.email && <span>Please enter a valid email address</span>}

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default MyForm;


// import React from 'react'
// import { useForm } from 'react-hook-form';


// const MyForm = () => {
//   const { register,handleSubmit} = useForm()

//   const onSubmit = (data) => {
//     console.log(data)
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type='text' name='firstName' placeholder='First Name' ref={register} />

//       <input type= 'text' name='lastName' placeholder='Last Name' ref={register} />

//       <input type='email' name='email' placeholder='Email' ref={register} />
      
//       <input type='password' name='password' placeholder='Password' ref={register} />
      
//       <button type='submit' />

//     </form>
//   )
// }

// export default MyForm



import React from 'react'

const CvTemplates = () => {
  return (
    <div>CvTemplates</div>
  )
}

export default CvTemplates