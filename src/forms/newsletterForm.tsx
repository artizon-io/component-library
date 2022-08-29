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
  readonly onSubmitBusinessLogic? : (email: string) => void;

} & React.HTMLAttributes<HTMLFormElement>> = ({ onSubmitBusinessLogic, ...props }) => {
  const [email, setEmail] = useState('');

  const onSubmit : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (onSubmitBusinessLogic)
      onSubmitBusinessLogic(email);
    setEmail('');
  }

  const onChange : React.FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  }

  // Opened issue of compatibility between emotion "as" prop and typescript
  // https://github.com/emotion-js/emotion/issues/2266

  return (
    <StyledNewsletterForm
      type="horizontal"
      gap={15}
      {...props}
    >
      <EmailInput required onChange={onChange} value={email} className="email-input"/>
      {/* @ts-expect-error */}
      <SimpleButton type="submit" onClick={onSubmit}>Sign me up!</SimpleButton>
    </StyledNewsletterForm>
  );
}