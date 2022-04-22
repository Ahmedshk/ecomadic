import React from 'react';
import {Container, FormControl, FormLabel, Input} from '@chakra-ui/react';

const Login = () => {

    return (
        <Container>
            <div className='register_form'>
                <div style={{textAlign: 'center'}} className="text">
                    LOGIN
                </div>
                <form>
                    <div className='register_data'>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email Address</FormLabel>
                            <Input id='email' type='email' placeholder={'Email'} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='email'>Create a Password</FormLabel>
                            <Input id='email' type='email' placeholder={'Password'} />
                        </FormControl>
                    </div>

                    <div className='text-center'>
                        <button className="main_register">Login</button>
                    </div>
                    <p className={'sign_google'}>
                        Don't Have account? SignUp
                    </p>
                </form>
            </div>
        </Container>
    )
}
export default Login