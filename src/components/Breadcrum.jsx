import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

function BreadcrumbExample({ title, menu, category }) {
  return (
    <Breadcrumb className="d-flex align-items-center g-0">
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      {title && (
        <LinkContainer to={`/${menu}/${category}`}>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </LinkContainer>
      )}
      <Breadcrumb.Item active>{category}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
