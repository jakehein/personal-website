import React, { useState } from "react";
import { sendContactForm } from "../../utils/email";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const initState = {
  formData: initFormData,
  isLoading: false,
  error: "",
};

function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { formData, isLoading, error } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(formData);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const onBlur = (event) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [event.target.name]: event.target.value,
      },
    }));
  };

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact Me</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl
        isRequired
        isInvalid={touched.firstName && !formData.firstName}
        mb={5}
      >
        <FormLabel>First Name:</FormLabel>
        <Input
          type="text"
          //id="firstName"
          name="firstName"
          errorBorderColor="red.300"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.lastName && !formData.lastName}
        mb={5}
      >
        <FormLabel>Last Name:</FormLabel>
        <Input
          type="text"
          //id="lastName"
          name="lastName"
          errorBorderColor="red.300"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.email && !formData.email}
        mb={5}
      >
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          //id="email"
          name="email"
          errorBorderColor="red.300"
          value={formData.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.subject && !formData.subject}
        mb={5}
      >
        <FormLabel>Subject:</FormLabel>
        <Input
          type="text"
          //id="subject"
          name="subject"
          errorBorderColor="red.300"
          value={formData.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.message && !formData.message}
        mb={5}
      >
        <FormLabel>Message:</FormLabel>
        <Textarea
          //id="message"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={formData.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !formData.email ||
          !formData.firstName ||
          !formData.lastName ||
          !formData.message ||
          !formData.subject
        }
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </Container>
  );
}

export default Contact;
