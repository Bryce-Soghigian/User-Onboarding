import React from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
// import axios from "axios";

const SignupForm = ({ errors, touched}) => {
  return (
    
   
    <Form>
      <label htmlFor="name">Name</label>
      <Field
       autoComplete="off"
        type="text"
         id="name"
          name="name"
           />
      <p>{touched.name&& errors.name}</p>
      <label htmlFor="email">Email</label>
      <Field 
      autoComplete="off"
       type="text" 
       id="email" 
       name="email" />
        <p>{touched.email && errors.email}</p>

      <label htmlFor="password">Password</label>
      <Field autoComplete="off" type="password" id="password" name="password" />
<p>{touched.password && errors.password}</p>
      <label htmlFor="tos">T.O.S.</label>
      <Field autoComplete="off" type="checkbox" id="check" name="check" />
<h6>{touched.check && errors.check}</h6>
      <button type="submit" 
      // onClick = { 
        
      //   const [data,setData] = useState({});
      //   axios.get("_https://reqres.in/api/users_")}
        >Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      password: "",
      tos: null
    };
  },
  handleSubmit(values) {
    console.log("Your input has been output");
    console.log(values);
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(10, "Must be less than 10 characters")
      .required("This field is required"),
    email: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(45,"must be a real email bruther")
      .email("Your form is wrong")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Name must be at least 8 characters long")
      .required("This field is required")
    
  })
})(SignupForm);



















































// // import s from "s.css"
// import * as yup from "yup";


// const userSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup
//     .string()
//     .email()
//     .required(),
//   password: yup
//     .string()
//     .required()
//     .max(13)
//     .min(8)
// });
// function MyComponent(props) {

//   const [user, setUser] = useState(
      
//     {
//         name: "",
//   email: "",
//   password: ""
//     }
//   );
//   return (
//     <Fragment>
//       <span className={`${s.output}`}>{JSON.stringify(user, null, 2)}</span>
//       <Formik
//         initialValues={user}
//         onSubmit={(values, actions) => {
//           console.log(actions);
//           actions.setSubmitting(true);
//           setUser(values);
//           setTimeout(() => {
//             actions.resetForm(setUser= {
//                 name: "",
//           email: "",
//           password: ""
//             });
//             actions.setSubmitting(false);
//           }, 2000);
//         }}
//         validationSchema={userSchema}
//       >
//         {props =>
//           !props.isSubmitting ? (
//             <form onSubmit={props.handleSubmit} className={s.form}>
//               <Field
//                 type="email"
//                 placeholder="Enter email"
//                 onChange={props.handleChange}
//                 name="email"
//                 value={props.values.email}
//                 className={s.text_field}
//               />

//               {props.errors.email && props.touched.email ? (
//                 <span className={s.field_text}>{props.errors.email}</span>
//               ) : (
//                 ""
//               )}

//               <Field
//                 type="password"
//                 onChange={props.handleChange}
//                 name="password"
//                 value={props.values.password}
//                 placeholder="Password"
//                 className={s.text_field}
//               />

//               {props.errors.password && props.touched.password ? (
//                 <span className={s.field_text}>{props.errors.password}</span>
//               ) : (
//                 ""
//               )}
//               <Field
//                 name="name"
//                 onChange={props.handleChange}
//                 value={props.values.name}
//                 type="text"
//                 placeholder="Name"
//                 className={s.text_field}
//               />
//               {props.errors.name && props.touched.name ? (
//                 <span className={s.field_text}>{props.errors.name}</span>
//               ) : (
//                 ""
//               )}
//               <button
//                 type="submit"
//                 disabled={!props.dirty && !props.isSubmitting}
//                 className={`${s.button} ${s.submit_button}`}
//               >
//                 Submit
//               </button>
//               <button
//                 disabled={!props.dirty}
//                 onClick={props.handleReset}
//                 type="button"
//                 className={s.button}
//               >
//                 Reset
//               </button>
//             </form>
//           ) : (
//             <div className={s.overlay} />
//           )
//         }
//       </Formik>
//     </Fragment>
//   );
// }
// export default MyComponent;