import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';

import ContactSchema, { FormData } from '@validations/contactSchema';
import FormField from '@components/common/FormField/FormField';
import Button from '@components/common/Button';

import useStyles from './styles';

const ContactMe = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      await new Promise(res => {
        setTimeout(res, 2000);
      });

      // eslint-disable-next-line no-console
      console.log('SUCCESS', data);
    } catch (error) {
      setError('root', { message: 'Something went wrong' });
    }
  };
  return (
    <section id="contactme" className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <h2 className={classes.heading}>{t('contactme.title')}</h2>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormField
            type="text"
            placeholder={t('contactme.fullName')}
            name="fullname"
            register={register}
            error={errors.fullname}
            label={t('contactme.fullName')}
          />
          <FormField
            type="text"
            placeholder={t('contactme.email')}
            name="email"
            register={register}
            error={errors.email}
            label={t('contactme.email')}
          />
          <div>
            <textarea
              className={classNames(classes.textarea, errors.message && classes.inputError)}
              {...register('message')}
              name="message"
              placeholder={t('contactme.message')}
            />
            {errors.message && <span className={classes.error}>{errors.message.message}</span>}
          </div>
          <Button className={classes.btn} styleType="secondary" type="submit" name={t('contactme.send')} isDisabled={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
