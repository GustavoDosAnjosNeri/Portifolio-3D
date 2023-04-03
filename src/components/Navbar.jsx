import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
`;

const ListItem = styled.li`
    cursor: pointer;
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    border: none;
    background-color: #da4ea2;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
        <Links>
            <Logo src="./img/logo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Links>
        <Icons>
            <Icon src="./img/search.png"/>
            <Button>Hire Now</Button>
        </Icons>
        </Container>
    </Section>
  )
}

export default Navbar