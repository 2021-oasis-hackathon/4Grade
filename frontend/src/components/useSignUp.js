import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

export function useSignUp() {
  
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    email: '',
  });
  
  const [check, setCheck] = useState({
    emailError: false,
    passwordError: false,
    passwordLengthError: false
  });
  
  const { name, password, passwordConfirm, nickname, email } = inputs;
  const { emailError, passwordError, passwordLengthError } = check;
  
  const history = useHistory();
  const [error, setError] = useState(null);

  const domain = "http://ec2-13-124-13-158.ap-northeast-2.compute.amazonaws.com:8080/api/sign-up";
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        domain,
        {
          email: email,
          password: password,
          nickname: nickname,
          name: name,
        }
      );
      console.log(response);
      history.push("/");
    } catch (e) {
      setError(e);
    }
  };

  if (error) {
    alert("에러가 발생했습니다");
    history.push("/signup");
  }

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const onChangeEmail = useCallback(e => {
    const { name, value } = e.target;
    setCheck({
      ...check,
      [name]: !isEmail(value)
    });
  }, [check]);

  const onChangePassword = useCallback(e => {
    const { name, value } = e.target;
    setCheck({
      ...check,
      [name]: value.length < 8
    });
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [check, inputs]);

  const onChangePasswordCheck = useCallback(e => {
    const { name, value } = e.target;
      setCheck({
        ...check,
        [name]: value !== password
      });
      setInputs({
        ...inputs,
        [name]: value
      });
    }, [check, password, inputs]);

  const isEmail = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };


  return {
    name,
    password,
    passwordConfirm,
    nickname,
    email,
    emailError,
    passwordError,
    passwordLengthError,
    onChange,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    onSubmit
  };
}