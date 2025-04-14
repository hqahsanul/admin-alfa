import PageBreadcrumb from '@/components/PageBreadcrumb';
import ChartJs from './components/ChartJs';
export const metadata = {
  title: "Chart js"
};
const ChartjsCharts = () => {
  return <>
      <PageBreadcrumb title="Chartjs" subName="Charts" />
      <ChartJs />
    </>;
};
export default ChartjsCharts;