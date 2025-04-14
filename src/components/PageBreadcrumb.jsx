import Link from 'next/link';
import { BreadcrumbItem, Col, Row } from 'react-bootstrap';
const PageBreadcrumb = ({
  subName,
  title,
  addedChild
}) => {
  return <>
			{subName && <Row>
					<Col xs={12}>
						<div className="page-title-box">
							<div className="page-title-right">
								<ol className="breadcrumb m-0">
									<Link href="/" style={{
                color: '#6C757D'
              }} className="breadcrumb-item">
										Velonic
									</Link>
									{/* <BreadcrumbItem>{subName}</BreadcrumbItem> */}
									<BreadcrumbItem active>{title}</BreadcrumbItem>
								</ol>
							</div>
							<h4 className="page-title">{title}</h4>
							{addedChild}
						</div>
					</Col>
				</Row>}
		</>;
};
export default PageBreadcrumb;