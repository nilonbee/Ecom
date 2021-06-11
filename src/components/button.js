import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
background: transparent;
font-size:1.4rem;
border: 0.05rem solid var(--lightBlue);
border-color :${prop=> (prop.cart?"var(--mainYellow)" :"var(--mightBlue)")};
color: ${prop=> (prop.cart?"var(--mainYellow)" : "var(--lightBlue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
curser: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&: hover{
  background: ${prop=>(prop.cart?"var(--mainYellow)": "var(--lightBlue)")};
  color: var(--mainBlue);
}
&: focus {
  outline: none;
}
`