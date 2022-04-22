import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "./Footer.css";
import { FaSearch } from 'react-icons/fa'


const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};


const Footer = () => {
    return (
        <Box className='footer_container'
             bg={"#05333F"}
             color={"white"}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Text fontSize={'lg'}>
                                Ecomadic
                            </Text>
                        </Box>
                        <Text fontSize={'sm'}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus ducimus atque alias hic quis ab corporis fuga enim similique, veniam pariatur, possimus illum repudiandae accusamus deserunt odit, vitae numquam.
                        </Text>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                    </Stack>
                    <Stack align={'flex-start'}>

                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondary</Link>
                        <Link href={'#'}>Link Secondaryy</Link>
                        <Link href={'#'}>Link Secondary</Link>
                    </Stack>
                    <Stack align={'flex-start'}>

                        <Stack className='input_container' direction={'row'}>

                            <Input
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={"1px solid grey"}
                                borderRadius={"20px"}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />


                            <span><FaSearch /></span>

                        </Stack>
                        <Stack direction={'row'} color={"white"} marginTop={10} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'} >
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'Linkedin'} href={'#'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                            <SocialButton label={'Facebook'} href={'#'}>
                                <FaFacebook />
                            </SocialButton>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
export default Footer