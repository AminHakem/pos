import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border-color:var(--lightBlue)!important;
border: 0.27rem solid var;
text-color: var (--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.3rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainBlue);
    color:var(--lightblue);
}
&:focus{
    outline: none;
}
`;