import React from 'react';
import Alerts from './Component/Alerts';
import PageBreadcrumb from '@/components/PageBreadcrumb';
export const metadata = {
  title: "Alert"
};
const AlertPage = () => {
  return <>
      <PageBreadcrumb title="Alerts" subName="Base UI" />
      <Alerts />
    </>;
};
export default AlertPage;