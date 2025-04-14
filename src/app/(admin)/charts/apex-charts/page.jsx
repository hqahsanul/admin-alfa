import PageBreadcrumb from '@/components/PageBreadcrumb';
import ApexCharts from './component/ApexCharts';
export const metadata = {
  title: "Apex Charts"
};
const ApexChartsPage = () => {
  return <>
      <PageBreadcrumb title="Apex Charts" subName="chats" />
      <ApexCharts />
    </>;
};
export default ApexChartsPage;