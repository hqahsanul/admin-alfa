import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';
import AllPagination from './components/AllPagination';
export const metadata = {
  title: 'Pagination'
};
const Pagination = () => {
  return <>
      <PageBreadcrumb title="Pagination" subName="Base UI" />
      <Row>
        <Col xl={12}>
          <AllPagination />
        </Col>

      </Row>
    </>;
};
export default Pagination;