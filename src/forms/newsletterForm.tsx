import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { EmailInput } from "../inputs/emailInput";
import { SimpleButton } from "../buttons/simpleButton";
import { Flexbox, StyledFlexbox } from "../layouts/flexbox";


const StyledNewsletterForm = styled(StyledFlexbox.withComponent('form'))`
  & > .email-input {
    flex: 1;
  }
`;

export const NewsletterForm : FC<{
  readonly onSubmitBusinessLogic? : (string) => void;

} & React.HTMLAttributes<HTMLFormElement>> = ({ onSubmitBusinessLogic }) => {
  const [email, setEmail] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (onSubmitBusinessLogic)
      onSubmitBusinessLogic(email);
    setEmail('');
  }

  function onChange(e) {
    setEmail(e.target.value);
  }

  // Opened issue of compatibility between emotion "as" prop and typescript
  // https://github.com/emotion-js/emotion/issues/2266

  return (
    <StyledNewsletterForm
      type="horizontal"
      gap="small"
    >
      <EmailInput required onChange={onChange} value={email} className="email-input"/>
      <SimpleButton type="submit" onClick={onSubmit}>Sign me up!</SimpleButton>
    </StyledNewsletterForm>
  );
}