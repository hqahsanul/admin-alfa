import React from 'react';
import FormWizard from './Components/Wizard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
export const metadata = {
  title: "Form Wizard"
};
const FormWizardPage = () => {
  return <>
		<PageBreadcrumb title="Form Wizard" subName="Forms" />
		<FormWizard />
		</>;
};
export default FormWizardPage;