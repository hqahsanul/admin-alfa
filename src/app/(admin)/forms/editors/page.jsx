import PageBreadcrumb from '@/components/PageBreadcrumb';
import Editors from './component/Editors';
export const metadata = {
  title: "Editors"
};
const EditorsPage = () => {
  return <>
      <PageBreadcrumb title="Editors" subName="Forms" />
      <Editors />
    </>;
};
export default EditorsPage;