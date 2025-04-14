import PageBreadcrumb from '@/components/PageBreadcrumb';
import Dropdowns from './components/Dropdowns';
export const metadata = {
  title: "Dropdown"
};
const DropdownsPage = () => {
  return <>
			<PageBreadcrumb title="Dropdowns" subName="Base UI" />
			<Dropdowns />
		</>;
};
export default DropdownsPage;