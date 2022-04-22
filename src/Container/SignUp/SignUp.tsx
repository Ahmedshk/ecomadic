import React from 'react';
import {Container, FormControl, FormLabel, Input} from '@chakra-ui/react';
import Google from "../../images/google.jpg";
import './SignUp.css';

const Register = () => {

    return (
        <Container>
        <div className='register_form'>
            <div className="text">
                    Join to unlock the best
                    of Ecomadic
                </div>
            <form>
                    <div className='register_data'>
                        <div style={{display: 'flex'}}>
                            <FormControl>
                                <FormLabel htmlFor='email'>First Name</FormLabel>
                                <Input id='f_name' type='text' placeholder={'First Name'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='email'>Last Name</FormLabel>
                                <Input id='l_name' type='text' placeholder={'Last Name'} />
                            </FormControl>
                        </div>
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
                        <button className="main_register">Join</button>
                    </div>
                    <p className={'sign_google'}>
                        Sign in with <img src={Google} alt={'google'}/>
                    </p>
                </form>
        </div>
        </Container>
    )
}
export default Register