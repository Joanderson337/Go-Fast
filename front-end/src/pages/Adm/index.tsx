import { useForm } from 'react-hook-form';
import validator from 'validator';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import {
  LoginContainer,
  LoginContent,
  LoginInputContainer,
} from './styled';
import { ErrorMessage } from '../../components/ErrorMessage';
import {
  AuthError,
  AuthErrorCodes,
} from 'firebase/auth';
import {  useState } from 'react';
import { Loading } from '../../components/Loading';
import { Icon } from '../../assets/Icon';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  login: string
  password: string
}

export function Adm () {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<ILoginForm>();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      setIsLoading(true);

    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('login', { type: 'notFound' });
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>
          <Icon name='adm' size={80} />
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.login}
              placeholder="Digite seu e-mail"
              {...register('login', {
                required: true,
                validate: (value) => {

                  return validator.isEmail(value);
                }
              })}
            />

            {errors?.login?.type === 'required' &&  (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors?.login?.type === 'notFound' && (
              <ErrorMessage>
                O e-mail não foi encontrado.
              </ErrorMessage>
            )}

            {errors?.login?.type === 'validate' && (
              <ErrorMessage>
                Por favor, insira um e-mail válido.
              </ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <ErrorMessage>A senha é inválida.</ErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
          <CustomButton
            onClick={handleLogin}
          >
            <Icon name='back' /> Voltar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}
