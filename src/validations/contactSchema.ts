import { z } from 'zod';

const ContactSchema = z.object({
  fullname: z.string().min(1, { message: 'Full name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email(),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type FormData = z.infer<typeof ContactSchema>;

export default ContactSchema;
