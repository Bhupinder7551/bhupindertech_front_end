import LoginContext from "./loginContext";

const LoginState = (props) => {

const data=()=>{
 console.log("bhupinderr")
}
  return (
    <LoginContext.Provider
      value={{data }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
