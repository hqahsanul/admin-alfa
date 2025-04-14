import PageBreadcrumb from '@/components/PageBreadcrumb';
import FormAdvanced from './component/FormAdvanced';
export const metadata = {
  title: "Form Advanced"
};
const FormAdvancedPage = () => {
  return <>
      <PageBreadcrumb title="Form Advanced" subName="Forms" />
      <FormAdvanced />
    </>;
};
export default FormAdvancedPage;