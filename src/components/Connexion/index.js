import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  IconWrapper,
  Text,
} from "./ConnectElements";

const Connecter = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <IconWrapper>
            <Icon to="/">JJK SERVICES</Icon>
          </IconWrapper>
          <FormContent>
            <Form action="#">
              <FormH1>Se Connecter</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
              />
              <FormLabel htmlFor="for">Mot de passe</FormLabel>
              <FormInput
                type="password"
                required
              />
              <FormButton type="submit">Connexion</FormButton>
              <Text>Mot de passe oublié ?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Connecter;
